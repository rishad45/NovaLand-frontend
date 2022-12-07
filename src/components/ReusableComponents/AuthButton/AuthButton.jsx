import './authButton.scss'
import React from 'react'

const AuthButton = ({width,height,label}) => {
    return (
        <>
            <button className='authButton' type='submit' style={{width:width,height:height}}>{label}</button>
        </> 
    )
}

export default AuthButton