import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from "../../Hooks/form-hook";
import InputField from "../ReusableComponents/Input field/InputField";
import axios from '../../Apis/Axios'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setuser } from '../../Redux/Slices/userSlice';
import { useDispatch } from 'react-redux';

// import {hasError,error} from '../../Constants/formValidation' 

const SignupForm = (props) => {
    // navigate
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const submitHandler = (event) => {
        event.preventDefault();
        const isSuccess = validate(formState.inputs)
        if (isSuccess) {
            axios.post('/userSignup', formState.inputs).then((res) => {
                if (res.data.success) { 
                    dispatch(setuser(res.data.user));
                    navigate('/') 
                } else {
                    toast.error(res.data.message, toastoptions) 
                }
            })
        }
    }

    const [formState, inputHandler] = useForm({
        userName: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const toastoptions = {
        position: "bottom-left",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true
    }

    // validate form
    const validate = ({ userName, email, password, rePassword }) => {
        console.log("in validation")
        if (userName.length === 0) toast.error("user name is required")
        else if (email.length === 0) toast.error("Email field is required", toastoptions)
        else if (!/\S+@\S+\.\S+/.test(email)) toast.error("please enter the correct email", toastoptions);
        else if (password.length === 0) toast.error("Password is required", toastoptions)
        else if (password.length < 8) toast.error("Password must have at least 8 characters", toastoptions)
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password)) toast.error("Password must have at least one character and one uppercase letter", toastoptions)
        else if (rePassword !== password) toast.error("Password and ConfirmPassword must be same", toastoptions)
        else return true
        return false
    }

    return (
        <>
            <form onSubmit={submitHandler}>

                <InputField id="userName" element="input" type="text" label="Username" onInput={inputHandler}></InputField>
                <InputField id="email" element="input" type="email" label="Email" onInput={inputHandler}></InputField>
                <InputField id="password" element="input" type="password" label="Password" onInput={inputHandler}></InputField>
                <InputField id="rePassword" element="input" type="password" label="Repeat Password" onInput={inputHandler}></InputField>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AuthButton width={'8rem'} height={'2rem'} label={'Signup'} />
                </div>
            </form>
            <div style={{ bottom: 0, left: 0 }}>
                <ToastContainer />
            </div>
        </>
    )
}

export default SignupForm