import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { axiosPrivate } from '../../Apis/Axios'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import Spinner from '../ReusableComponents/Spinner/Spinner'

const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [input, setInput] = useState({
    password: '',
    rePassword: '',
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  const[email,setEmail] = useState('');
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input);
  }
  const submit = () => {
    if (input.rePassword !== input.password) setErrorMsg('Password mismatch')
    axiosPrivate.post('/changePassword',{
      email : email,
      password: input.password,
    }).then((res) => {
      navigate('/login');
    }).catch((err) => {
      console.log(err);
    })
  }

  const verifyToken = (token) => {
    setLoading(true);
    axiosPrivate.post('/verifyToken', {
      token
    }).then((result) => {
      setLoading(false)
      setError(false);
    }).catch((err) => {
      setLoading(false)
      setError(true)
    })
  }

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const token = query.get('token');
    const emailN = query.get('email');
    setEmail(emailN);
    if (!token) navigate('/error');
    if (!emailN) navigate('/error');
    verifyToken(token);
  }, [])
  return (
    <>
      {
        loading && <Spinner />
      }
      {
        error === false ? (
          <div>
            <label>Your new password :</label>
            <input type="password" name="password" id="" value={input.password} onChange={handleChange} />
            <label>Re enter password : </label>
            <input type="password" name="rePassword" id="" value={input.rePassword} onChange={handleChange} />
            <p>{errorMsg}</p>
            <button onClick={submit}>
              <AuthButton width={'100px'} height={'50px'} label={'Confirm'} />
            </button>
          </div>
        ) : (
          <div>
            <h3>
              Your link may have expired, Please request for new link
            </h3>
          </div>
        )
      }
    </>
  )
}

export default ResetPassword