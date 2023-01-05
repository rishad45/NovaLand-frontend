import React from 'react'
import './profileCard.scss'
import { axiosPrivate } from '../../../Apis/Axios' 
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setcurrentCommunity} from '../../../Redux/Slices/communitySlice'
import AuthButton from '../AuthButton/AuthButton'
import { useEffect } from 'react'
import { useState } from 'react'

const ProfileCard = ({ width, height, src, mainName, subName, isButton, id, setJoin }) => { 

  const joinCommunity = (e) => {
    e.stopPropagation() 
    console.log("join in community clicked") 
    const payload = {
      communityId : id
    }
    axiosPrivate.post('/joinInCommunity',payload).then((res) => {
      console.log(res) 
      setJoin(true)  
    })
  }

  const dispatch = useDispatch()
    const navigate = useNavigate() 

    const setCurrent = (id) => {
        console.log("setCurrent Clicked") 
        console.log("clicked", id) 
        localStorage.setItem('community',id) 
        dispatch(setcurrentCommunity(id))  
        navigate('/singleCommunity') 
    }

  return ( 
    <div className='profileCard' style={{ width: width, height: height }} onClick = {()=>{setCurrent(id)}}> 
      <div className="profileSection"> 
        <div className='pro-img-container'>
          <img src={src} alt="" /> 
        </div>
      </div>
      <div className="nameSection">

        <p className='main-name'>{mainName ? mainName : 'Beauty and the Beast'}</p>
        <p className='main-unique-name'>{subName ? subName : '_beauty_beast' }</p> 
      </div>
      {
        isButton && <div className='joinButton' onClick={joinCommunity}> 
          <AuthButton height={'30px'} width={'80px'} label={'join'} />  
        </div>
      }
    </div>
  )
}

export default ProfileCard 