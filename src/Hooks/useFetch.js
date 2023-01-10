// useFetch.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from '../Apis/Axios'
const useFetch = (url) => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    console.log(response)
    setLoading(true)
    Axios.post(url,{
        credential : response.credential
    }).then((res) => {
        console.log('response',res)
        setLoading(false) 
        navigate('/') 
    }).catch((err)=>{
      setLoading(false)
      setError(err.response.data.message) 
    })
  };
  return { loading, error, handleGoogle };
};

export default useFetch;