import React from 'react'
import './profileCard.scss'
import { axiosPrivate } from '../../../Apis/Axios' 
const ProfileCard = ({ width, height, src, mainName, subName, isButton, id }) => { 

  const joinCommunity = () => {
    const payload = {
      communityId : id
    }
    axiosPrivate.post('/joinInCommunity',payload).then((res) => {
      console.log(res) 
    })
  }
  return (
    <div className='profileCard' style={{ width: width, height: height }}>
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
        isButton && <div className='joinButton'> 
          <button style={{padding:'3px'}} onClick={joinCommunity}>Join</button>
        </div>
      }
    </div>
  )
}

export default ProfileCard 