import useAxiosprivate from "../../Hooks/useAxiosprivate"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Location, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import { setuser } from '../../Redux/Slices/userSlice'
const ProtectedRoute = (props) => {
    let success = true
    // navigate and location
    const navigate = useNavigate()
    const go = () => {
        console.log('why')
        navigate('/login', { state: { from: location }, replace: true })
    }
    const location = useLocation()
    // dispatch
    const dispatch = useDispatch()
    // axios instance
    const axiosPrivate = useAxiosprivate()
    //  function to verify auth
    const refresh = useSelector((state) => state.globalRefresh)
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!user.username) {
            navigate('/login', { state: { from: location }, replace: true });
        }    
        console.log('user is', user);
        return () => {
            dispatch(setuser({
                id: '',
                userName: '',
                email: '',
                _id: '',
                profile: '',
                bio: ''
            }))
        }
    }, [user,user.username, location])

    return (
  <>
    { user.username && props.children}
  </>
)

}

export default ProtectedRoute