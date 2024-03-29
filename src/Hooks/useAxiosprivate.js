import { axiosPrivate } from "../Apis/Axios"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import useRefreshToken from "./useRefreshToken"
import { setuser } from "../Redux/Slices/userSlice"

const useAxiosprivate = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const refresh = useRefreshToken()
    const dispatch = useDispatch()
    // const token = useSelector((state) => state.token)

    useEffect(() => {
        // response interceptor
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                let newAccessToken
                const prevRequest = error?.config
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    console.log(1)
                    prevRequest.sent = true
                    try {
                        newAccessToken = await refresh()
                        console.log('new one is', newAccessToken)
                    } catch (err) {
                        console.log("cannot access refresh token, redirecting to login page")
                        dispatch(setuser(null));
                        navigate('/login', { state: { from: location }, replace: true })
                    }
                    // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            // axiosPrivate.interceptors.request.eject(requestInterceptor) 
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [refresh])

    return axiosPrivate

}

export default useAxiosprivate
