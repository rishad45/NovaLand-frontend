import React from 'react'
import './communities.scss' 
import ProfileCard from '../../components/ReusableComponents/ProfileCards/ProfileCard'
import CommunitiesNav from '../../components/Communities switchBar/CommunitiesNav'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTab } from '../../Redux/Slices/tabSlice'

const Communities = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTab(1)) 

    return ()=>{
      dispatch(setTab(null)) 
    }
  },[])
  return (
    <div className='communitiesAll'>
          <CommunitiesNav/>  
    </div>
  )
}

export default Communities