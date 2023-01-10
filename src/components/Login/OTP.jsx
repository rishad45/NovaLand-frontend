import React from 'react'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'

const OTP = ({setStep}) => {
  return (
    <div>
        <div className="otpFields">
            <input type="number" name="" id="" />
            <input type="number" name="" id="" />
            <input type="number" name="" id="" />
            <input type="number" name="" id="" />
        </div>
        <button onClick={()=> {setStep(2)}}> 
            <AuthButton label={'Verify'} width={'300px'} height={'100px'}/> 
        </button>
    </div>
  )
}

export default OTP