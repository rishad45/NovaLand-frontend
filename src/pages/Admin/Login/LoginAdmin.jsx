import React from 'react'
import Login from '../../Login Page/Login'

const LoginAdmin = () => {
  return (
    <div className='loginAdmin'>
        <Login admin={true}/>
    </div>
  )
}

export default LoginAdmin