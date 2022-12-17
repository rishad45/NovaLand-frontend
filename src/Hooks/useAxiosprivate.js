import { axiosPrivate } from "../Apis/Axios"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import {useNavigate,useLocation} from 'react-router-dom'
import useRefreshToken from "./useRefreshToken" 

import {setToken} from '../Redux/Slices/tokenSlice'
import {setuser} from '../Redux/Slices/userSlice' 

const useAxiosprivate = () => {
    const navigate = useNavigate()
    const location = useLocation() 
    const refresh = useRefreshToken() 
    const dispatch = useDispatch() 
    // const token = useSelector((state) => state.token)

    useEffect(() => {
        // interceptors
        // request interceptor
        // const requestInterceptor = axiosPrivate.interceptors.request.use(
        //     config => {
        //         if(!config.headers['Authorization'] ){
        //             config.headers['Authorization'] = `Bearer ${token}`;
        //         }
        //         return config
        //     }, (error) => {
        //         Promise.reject(error) 
        //     }
        // )
        // response interceptor
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async(error) => {
                let newAccessToken
                const prevRequest = error?.config
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true
                    try{
                        newAccessToken = await refresh() 
                    }catch(err){
                        console.log("cannot access refresh token, redirecting to login page")
                        dispatch(setToken('')) 
                        dispatch(setuser(null)) 
                        navigate('/login', {state : {from : location },replace : true})
                    }
                    // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest)  
                }
                return Promise.reject(error)
            }
        )

        return ()=>{
            // axiosPrivate.interceptors.request.eject(requestInterceptor) 
            axiosPrivate.interceptors.response.eject(responseIntercept) 
        }
    }, [refresh]) 

    return axiosPrivate

}

export default useAxiosprivate
