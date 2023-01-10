import './profileEdit.scss'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import { axiosPrivate } from '../../Apis/Axios'
import { useDispatch } from 'react-redux' 
import {setRefresh} from '../../Redux/Slices/globalRefreshSlice' 

const ProfileEdit = ({ profile,closeModal }) => { 
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch() 
    const[input,setInput] = useState({
        username : user.username,
        bio : user.bio
    }) 

    const handleChange = (e) => { 
        setInput({...input, [e.target.name] : e.target.value}) 
        console.log(input) 
    }

    const saveChanges = (e) => {
        e.stopPropagation() 
        let payload = {} 
        if (input.username !== user.username) payload.newUser = input.username                
        if(input.bio !== user.bio) payload.newBio = input.bio          

        if(Object.keys(payload).length === 0){
            closeModal(false) 
        }else{
            axiosPrivate.post('/edit-user-profile',payload).then((res) => {
                console.log(res.data) 
                dispatch(setRefresh()) 
                closeModal() 
            }) 
        }

    }
    return (
        <div className='profileEdit'>
            <div className="imageInEditor">
                <img src={profile} alt="" />
            </div>
            <div className="detailsIneditor">
                <div className="usernameEdirDiv">
                    <span>Username :</span>
                    <input type="text" name='username' value={input.username} onChange={handleChange} /> 
                </div>
                <div className="bioEditDiv">
                    <span>Bio :</span>
                    <textarea rows={7} cols={70} value={input.bio} name='bio' onChange={handleChange}></textarea>  
                </div>
            </div>
            <div className='editChanges'>
                <button className='editChangesButton' onClick={saveChanges}> 
                    <AuthButton width={'300px'} height={'50px'} label={'Save Changes'}/> 
                </button>
            </div>
        </div>
    )
}

export default ProfileEdit