import React from 'react'
import './communities.scss' 
import ProfileCard from '../../components/ReusableComponents/ProfileCards/ProfileCard'
import CommunitiesNav from '../../components/Communities switchBar/CommunitiesNav'

const Communities = () => {
  return (
    <div className='communitiesAll'>
          <CommunitiesNav/>
    </div>
  )
}

export default Communities