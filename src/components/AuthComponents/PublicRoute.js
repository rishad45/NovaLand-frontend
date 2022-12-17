import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAxiosprivate from '../../Hooks/useAxiosprivate'

const PublicRoute = (props) => {
    let auth = true
    const navigate = useNavigate() 
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const axiosPrivate = useAxiosprivate()
    //  function to verify auth
    const getData = () => {
        try {
            axiosPrivate.post('/verifyAuth').then((res) => {
                console.log("hmmm")
                if (res.data.success) { 
                    console.log("hmmm successayiii")
                    auth = true
                    console.log(auth) 
                } else {
                    console.log("ooo oomfiii") 
                    auth = false
                }
            })
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        getData()  
        console.log("auth", auth) 
    }, []) 
    
    if(auth){ 
        console.log(from) 
        navigate(from,{replace : true})    
    }else{
        return props.children 
    }


}

export default PublicRoute