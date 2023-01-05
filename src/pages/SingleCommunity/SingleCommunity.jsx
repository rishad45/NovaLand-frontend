import React from 'react'
import './singleCommunity.scss'
import ProfileWrapper from '../../components/profileWrapper/ProfileWrapper'
import { axiosPrivate } from '../../Apis/Axios'
import Posts from '../../components/Posts/Posts'
import PostsProfile from '../../components/PostsProfile/PostsProfile'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const SingleCommunity = () => { 
  const [info, setInfo] = useState({ 
    name : '',
    admin : '' 
  })

  const [isMember,setIsmember] = useState(false) 
  const [isAdmin, setIsadmin] = useState(false)  
  const [join, setJoin] = useState(false) 
  const[posted,setPosted] = useState(false)  
  const[leaved,setLeaved] = useState(false) 
  const[updated,setUpdated] = useState(false)  
  const[profile,setProfile] = useState({
    profile : null,
    cover : null 
  }) 
  const currCommunity = useSelector((state) => state.currentCommunity) 
  const curr = localStorage.getItem('community') 

  const payload = {
    communityId : curr 
  }

  const communityInfo = async(communId) => { 
      axiosPrivate.post('/community-info',payload).then((res) => { 
        setInfo({
          name : res.data.info[0].name,
          admin : res.data.info[0].admin[0].userName 
        }) 

        setIsmember(res.data.isMember) 
        setIsadmin(res.data.isAdmin) 
        setProfile({profile : res.data.profile, cover : res.data.cover})   
      console.log("response", res.data.info[0])  
    })
  }
  useEffect(() => {
    communityInfo(currCommunity) 

    return(()=>{
      localStorage.removeItem('community') 
    })
  }, [join, leaved, updated])   
  const followdetails = [
    {
      id: 1,
      name: 'Members',
      count: 2000
    },
    {
      id: 2,
      name: 'Posts', 
      count: 1548
    }
  ]
  return (
    <div className='singleCommunityPage'>
      <ProfileWrapper isUser={false} isCommunity={true} name = {info.name} admin = {info.admin} isMember = {isMember} setJoin = {setJoin} setPosted = {setPosted} isAdmin = {isAdmin} setLeaved = {setLeaved} setUpdated={setUpdated} profile={profile} />  
      <div className='profileContent'>
        <div className="aboutSection">
          <div className="bio">
            <h4>About</h4>
            <p className='biotext'>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
          <div className="followdetails">
            {
              followdetails.map((i) => {
                return <div className='followDetItem' key={i.id}>
                  <span className='mainName'>{i.name}</span> <span className='count'>{i.count}</span>
                </div>
              })
            }
          </div>
        </div>
        <div className="postSection">
          <PostsProfile posted = {posted} /> 
        </div>
      </div>

    </div>
  )
}

export default SingleCommunity