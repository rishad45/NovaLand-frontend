import axios from '../Apis/Axios'


const useRefreshtoken = () => {

    const refresh = async () => {
        let newToken
        await axios.post('/refresh').then((res) => {   
            newToken = res.data.accessToken
            console.log(newToken) 
        })
        return newToken 
    }

    return refresh

}

export default useRefreshtoken