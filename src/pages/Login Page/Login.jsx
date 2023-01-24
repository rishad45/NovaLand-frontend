import React, { useState } from 'react'
import googleIcon from '../../assets/google-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import LoginForm from '../../components/Login/LoginForm'
import ForgotPassword from '../../components/Login/ForgotPassword'
import useFetch from '../../Hooks/useFetch'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setuser } from '../../Redux/Slices/userSlice'

const Login = ({ admin = false }) => {
  const dispatch = useDispatch()
  const clearRedux = () => {
    dispatch(setuser(null));
  }
  const navigate = useNavigate()
  // https://developers.google.com/identity/gsi/web/reference/js-reference
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5000/login-with-google"
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signupGoogle"), {
        // type: "standard",
        theme: "outline",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });
      // google.accounts.id.prompt()
    }
    clearRedux();
  }, [handleGoogle]);

  return (
    <div className='loginPage'>
      <div className="login-container" style={{ width: '70vw', height: '85vh' }}>
        <div className="loginFrstSide" style={{ width: '60%', height: '100%' }}>
          <div className="loginTop">
            <p>Welcome Back</p>
          </div>
          <div className="loginMiddle">
            {
              admin ? <LoginForm admin={true} /> : <LoginForm/>
            }
            {
              !admin && <div className='forrgot-password'>
                <span className='forgot-link' onClick={() => { navigate('/reset-password') }}>Forgot password?</span>
              </div>

            }
          </div>
          {
           !admin && <div className="loginBottom">
              <div style={{ width: '56%', height: '10px', borderBottom: '1px solid black', textAlign: 'center' }}>
                <span style={{ fontSize: '15px', backgroundColor: '#F3F5F6', padding: "0 10px" }} >or</span>
              </div>

              {error && <p style={{ color: "red" }}>{error}</p>}
              {loading ? (
                <div>Loading....</div>
              ) : (
                <div id='signupGoogle' className="signupGoogle">
                </div>
              )}

              <p>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none' }} className='link-to-signup'>Signup</Link></p>
            </div>
          }
        </div>
        <div className="loginsecndSide" style={{ width: '40%', height: '100%' }}>
          {
            admin ? (
              <img src="https://images.pexels.com/photos/12464199/pexels-photo-12464199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='adminImage' alt="" />
            ) : (
              <img src="https://i.pinimg.com/564x/c0/c7/5f/c0c75f054c8f8cd6e9b07726d1d4de54.jpg" alt="" />
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default Login