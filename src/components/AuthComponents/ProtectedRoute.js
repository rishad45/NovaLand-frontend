import useAxiosprivate from "../../Hooks/useAxiosprivate"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Location, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import {setuser} from '../../Redux/Slices/userSlice'
const ProtectedRoute = (props) => {
    let success = true
    // navigate and location
    const navigate = useNavigate()
    const location = useLocation()
    // dispatch
    const dispatch = useDispatch()
    // axios instance
    const axiosPrivate = useAxiosprivate()
    //  function to verify auth
    const refresh = useSelector((state)=> state.globalRefresh)
    const getData = () => {
        try {
            axiosPrivate.post('/verifyAuth').then((res) => {
                console.log("hmmm")
                if (res.data.success) {
                    console.log("hmmm successayiii") 
                    dispatch(setuser(res.data.user)) 
                    success = true 
                } else {
                    console.log("ooo oomfiii")
                    success = false
                }
            })
        } catch (error) {
            return error
        }
    }
    
    useEffect(() => {
        getData() 
        console.log(success)  
    }, [refresh])  

    if(success){
        return props.children
    }else{
        navigate('/login', { state: { from: location }, replace: true })      
    }
    

}

export default ProtectedRoute