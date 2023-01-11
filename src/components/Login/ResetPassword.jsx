import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
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
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input);
  }
  const submit = () => {
    const reslt = validate(input)
    if(reslt){
      if (input.rePassword !== input.password) setErrorMsg('Password mismatch')
      axiosPrivate.post('/changePassword', {
        email: email,
        password: input.password,
      }).then((res) => {
        navigate('/login');
      }).catch((err) => {
        console.log(err);
      }) 
    }
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

  const toastoptions = {
    position: "bottom-left",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true
  }
  // validate form
  const validate = ({ password, rePassword }) => {
    console.log("in validation")
    if (password.length === 0) toast.error("Password is required", toastoptions)
    else if (password.length < 8) toast.error("Password must have at least 8 characters", toastoptions)
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password)) toast.error("Password must have at least one character and one uppercase letter", toastoptions)
    else if (rePassword !== password) toast.error("Password and ConfirmPassword must be same", toastoptions)
    else return true
    return false
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
      <div style={{ bottom: 0, left: 0 }}>
        <ToastContainer/>
      </div>
    </>
  )
}

export default ResetPassword