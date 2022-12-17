import useAxiosprivate from "../../Hooks/useAxiosprivate"
import { useDispatch, useSelector } from 'react-redux'
import { setuser } from '../../Redux/Slices/userSlice'
import {setToken} from '../../Redux/Slices/tokenSlice'
import { useNavigate, Location, useLocation } from 'react-router-dom'
import { useEffect } from "react"
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
    const getData = () => {
        try {
            axiosPrivate.post('/verifyAuth').then((res) => {
                console.log("hmmm")
                if (res.data.success) {
                    console.log("hmmm successayiii")
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
    }, [])

    if(success){
        return props.children
    }else{
        navigate('/login', { state: { from: location }, replace: true })      
    }
    

}

export default ProtectedRoute