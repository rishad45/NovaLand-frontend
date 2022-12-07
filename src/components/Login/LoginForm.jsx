import React from 'react'
// custom hook
import { useForm } from '../../Hooks/form-hook'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import InputField from '../ReusableComponents/Input field/InputField'

const LoginForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);

  }

  const [formState, inputHandler] = useForm({
    email: { value: '' },
    password: { value: '' }
  });

  return (
    <form onSubmit={submitHandler}>
      <InputField id="email" element="input" type="email" label="Email" onInput={inputHandler}></InputField>
      <InputField id="password" element="input" type="password" label="Password" onInput={inputHandler}></InputField>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AuthButton width={'8rem'} height={'2rem'} label={'Login'} />
      </div>
      {/* <button type='submit'>Submit</button> */}
    </form>
  )
}

export default LoginForm