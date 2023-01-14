import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//redux reducers
// custom hook
import { useForm } from '../../Hooks/form-hook'
// components
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import InputField from '../ReusableComponents/Input field/InputField'
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setuser} from '../../Redux/Slices/userSlice'
import {setAdmin} from '../../Redux/Slices/adminSlice'
// axios
import axios from '../../Apis/Axios' 

//=========main function=====================
const LoginForm = ({admin = false}) => {
  // dispatch
  const dispatch = useDispatch()
  // navigate
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"  
  const adminfrom = location.state?.from?.pathname || '/admin'

  const submitHandler = (event) => {
    event.preventDefault();
    const isSuccess = validate(formState.inputs)
    if (isSuccess) {
      axios.post('/login', formState.inputs).then((res) => {
        if (res.data.success) {
          dispatch(setuser(res.data.user));
          navigate(from, {replace : true}) 
        } 
        else { toast.error(res.data.message) }
      })
    }
    console.log(formState.inputs);
  }

  const adminSubmit = (e) => {
    e.preventDefault()
    const isSuccess = validate(formState.inputs)
    if (isSuccess) {
      axios.post('/admin/login', formState.inputs).then((res) => {
        if (res.data.success) {
          console.log(res.data.admin);
          dispatch(setAdmin(res.data.admin));
          navigate(adminfrom, {replace : true});
        } 
        else { toast.error(res.data.message) }
      }).catch((err)=> {
        toast.error(err);
      })
    }
    console.log("ummm",formState);
  }

  const [formState, inputHandler] = useForm({
    email: { value: '' },
    password: { value: '' }
  });

  // toast options 
  const toastoptions = {
    position: "bottom-left",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true
  }

  // validate form
  const validate = ({ email, password }) => {
    if (email.length === 0) toast.error("Email field is required", toastoptions)
    else if (!/\S+@\S+\.\S+/.test(email)) toast.error("please enter the correct email", toastoptions);
    else if (password.length === 0) toast.error("Password is required", toastoptions)
    else return true
    return false
  }

  return (
    <>
      <form onSubmit={admin ? adminSubmit : submitHandler}>
        <InputField id="email" element="input" type="email" label="Email" onInput={inputHandler}></InputField> 
        <InputField id="password" element="input" type="password" label="Password" onInput={inputHandler}></InputField>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AuthButton width={'8rem'} height={'2rem'} label={'Login'} />
        </div>
      </form>
      <div style={{ bottom: 0, left: 0 }}>
        <ToastContainer />
      </div>
    </>
  )
}

export default LoginForm