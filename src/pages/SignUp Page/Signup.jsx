import React from 'react'
import Card from '../../components/ReusableComponents/Card/Card'
import SignupForm from '../../components/Signup/SignupForm'
import './signup.scss'
import {Link} from 'react-router-dom'

import googleIcon from '../../assets/google-icon.png'

const Signup = () => {
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
            <div className="signupGoogle">
              <img src={googleIcon} alt="" />
            </div>
            <p>already have an account? <Link to='/login' style={{textDecoration:'none'}} className='link-to-login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
