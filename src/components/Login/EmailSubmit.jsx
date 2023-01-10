import React, { useEffect } from 'react'
import './emailsubmit.scss'
import { useState } from 'react'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import { axiosPrivate } from '../../Apis/Axios';
const EmailSubmit = () => {
    const [success, setSuccess] = useState(null);
    const [email, setEmail] = useState({
        email: ''
    })
    const handleChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value })
        console.log(email.email)
    }
    const submit = () => {
        axiosPrivate.post('/email/sendOTP', {
            resetEMAIL: email.email,
        }).then((result) => {
            setSuccess(true)
            console.log(result);
        }).catch((err) => {
            setSuccess(false)
            console.log(err.response.data.message);
        })
    }
    // useEffect(() => {

    // }, [])
    return (
        <div className='emailSubmit'>
            {
                success === null && <>
                    <div className='emailBox'>
                            <label>Enter your Email : </label>
                            <input className='emailIp' type="text" name="email" id="email" value={email.email} onChange={handleChange} />
                        <button onClick={submit} className='emailsubmitButton' style={{background: 'none', border: 'none'}}>
                            <AuthButton label={'Submit'} width={'140px'} height={'30px'} />
                        </button>
                    <p className='warn'>* After verifying this email, We will send a link to your email, Create a new password by clicking that link <link rel="stylesheet" href="" /></p>
                    </div>
                </>
            }
            {
                success === true && <div>
                    <p>Verification link is sent to your email, You can click the link to create the new password</p>
                </div>
            }
            {
                success === false && <div>
                    <p>Some error occured</p>
                </div>
            }

        </div>
    )
}

export default EmailSubmit