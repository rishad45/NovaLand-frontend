import axios from '../Apis/Axios'

import { useDispatch } from 'react-redux'
import { setToken } from '../Redux/Slices/tokenSlice'

const useRefreshtoken = () => {
    const dispatch = useDispatch() 

    const refresh = async () => {
        let newToken
        await axios.post('/refresh').then((res) => {   
            newToken = res.data.accessToken
            console.log(newToken) 
            // dispatch(setToken(newToken))   
        })
        return newToken 
    }

    return refresh

}

export default useRefreshtoken