import React from 'react'
import SignupForm from '../../components/Signup/SignupForm'
import './signup.scss'
import { Link } from 'react-router-dom'

import useFetch from '../../Hooks/useFetch'
import { useEffect } from 'react'

const Signup = () => {
  // google login 
  // https://developers.google.com/identity/gsi/web/reference/js-reference
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5000/signup-google"
  ) 

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });
    }

    google.accounts.id.renderButton(document.getElementById("signupGoogle"), {
      // type: "standard",
      theme: "outline",
      // size: "small",
      text: "continue_with",
      shape: "pill",
    });

    // google.accounts.id.prompt()
    console.log("id", process.env.REACT_APP_GOOGLE_CLIENT_ID)
  }, [handleGoogle])

  return (
    <div className='signup'>
      <div className="signup-container" style={{ width: '70vw', height: '85vh' }}>
        <div className="signupFrstSide" style={{ width: '40%', height: '100%' }}>
          <img src="https://i.pinimg.com/564x/a0/14/bd/a014bdcaf2ddf24dcf21ef754109055a.jpg " alt="" />
        </div>
        <div className="signupsecndSide" style={{ width: '60%', height: '100%' }}>
          <div className="signupTop">
            <p>Welcome to NovaLand</p>
          </div>
          <div className="signupMiddle">
            <SignupForm />
          </div>
          <div className="signupBottom">
            <div style={{ width: '80%', height: '10px', borderBottom: '1px solid black', textAlign: 'center' }}>
              <span style={{ fontSize: '15px', backgroundColor: '#F3F5F6', padding: "0 10px" }} >or</span>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading ? (
              <div>Loading....</div>
            ) : (
              <div id='signupGoogle' className="signupGoogle">
              </div>
            )}
            <p>already have an account? <Link to='/login' style={{ textDecoration: 'none' }} className='link-to-login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
