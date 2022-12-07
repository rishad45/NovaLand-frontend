import React from 'react'
import { useForm } from "../../Hooks/form-hook";
import InputField from "../ReusableComponents/Input field/InputField";
import axios from '../../Constants/Axios'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton';

const SignupForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
        // axios.post('/signup',formState.inputs)
    }

    const [formState, inputHandler] = useForm({
        userName: { value: '' },
        email: { value: '' },
        password: { value: '' },
        rePassword: { value: '' }
    });

    return (
        <form onSubmit={submitHandler}>
            <InputField id="userName" element="input" type="text" label="UserName" onInput={inputHandler}></InputField>
            <InputField id="email" element="input" type="email" label="Email" onInput={inputHandler}></InputField>
            <InputField id="password" element="input" type="password" label="Password" onInput={inputHandler}></InputField>
            <InputField id="repPassword" element="input" type="password" label="Repeat Password" onInput={inputHandler
            }></InputField>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <AuthButton width={'8rem'} height={'2rem'} label={'Signup'} />
            </div>
            {/* <button className='signupButton' type='submit'>Submit</button>~ */}
        </form>
    )
}

export default SignupForm