import React from 'react'
import googleIcon from '../../assets/google-icon.png'
import { Link } from 'react-router-dom'
import './login.scss'
import LoginForm from '../../components/Login/LoginForm'

const Login = () => {

  return (
    <div className='loginPage'>
      <div className="login-container" style={{ width: '70vw', height: '85vh' }}>
        <div className="loginFrstSide" style={{ width: '60%', height: '100%' }}>
          <div className="loginTop">
            <p>Welcome Back</p>
          </div>
          <div className="loginMiddle">
            <LoginForm />
            <div className='forrgot-password'>
              <Link className='forgot-link'>Forgot password?</Link>
            </div>
          </div>
          <div className="loginBottom">
            <div style={{ width: '56%', height: '10px', borderBottom: '1px solid black', textAlign: 'center' }}>
              <span style={{ fontSize: '15px', backgroundColor: '#F3F5F6', padding: "0 10px" }} >or</span>
            </div>
            <div className="signupGoogle">
              <img src={googleIcon} alt="" />
            </div>
            <p>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none' }} className='link-to-signup'>Signup</Link></p>
          </div>
        </div>
        <div className="loginsecndSide" style={{ width: '40%', height: '100%' }}>
          <img src="https://i.pinimg.com/564x/c0/c7/5f/c0c75f054c8f8cd6e9b07726d1d4de54.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login