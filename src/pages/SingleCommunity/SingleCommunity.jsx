import React from 'react'
import './singleCommunity.scss'
import ProfileWrapper from '../../components/profileWrapper/ProfileWrapper'
import { axiosPrivate } from '../../Apis/Axios'
import PostsProfile from '../../components/PostsProfile/PostsProfile'
import { setcurrentCommunity } from '../../Redux/Slices/communitySlice'
import { setTab } from '../../Redux/Slices/tabSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
const SingleCommunity = ({ isprofile = false }) => {
  const dispatch = useDispatch()
  // everything for single community page 
  const [info, setInfo] = useState({
    name: '',
    admin: '',
    members: '',
    postsNo: '',
  })

  const [profileInfo, setProfileInfo] = useState({
    _id: '',
    userName: '',
    email: '',
    bio : ''
  })

  const [isMember, setIsmember] = useState(false)
  const [isAdmin, setIsadmin] = useState(false)
  const [join, setJoin] = useState(false)
  const [posted, setPosted] = useState(false)
  const [leaved, setLeaved] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [loading, setLoading] = useState(false)

  const [profile, setProfile] = useState({
    profile: null,
    cover: null
  })

  const currCommunity = useSelector((state) => state.currentCommunity)

  const payload = {
    communityId: currCommunity
  }

  const communityInfo = (communId) => {
    setLoading(true)
    axiosPrivate.post('/community-info', payload).then((res) => {
      setInfo({
        name: res.data.info[0].name,
        admin: res.data.info[0].admin[0].userName,
        members: res.data.info[0].totalUsers,
        postsNo: res.data.info[0].totalPosts
      })

      setIsmember(res.data.isMember)
      setIsadmin(res.data.isAdmin)
      setProfile({ profile: res.data.profile, cover: res.data.cover })
      console.log("response", res.data.info[0])
      setLoading(false)
    })
  }

  // everything that for user profile is here 
  let { userName } = useParams()
  let userNameGot = userName
  const currentUser = useSelector((state) => state.user)

  const [userFollowPost, setUserFollowPost] = useState({
    communCount: null,
    postCount: null
  })

  const userProfileInfo = () => {
    console.log('function going to fetch user info')
    setProfileInfo({
      userName: currentUser.username,
      email: currentUser.email,
      id: currentUser._id,
      bio : currentUser.bio 
    })
    axiosPrivate.post('/get-user-info').then(res => {
      console.log(res)
      setProfile({
        profile: res.data.details.profile,
        cover: res.data.details.cover
      })
      setUserFollowPost({
        communCount: res.data.details.communityCount,
        postCount: res.data.details.postCount
      })

    })
  }

  useEffect(() => {
    isprofile === false && communityInfo(currCommunity)
    isprofile === false && dispatch(setTab(1)) 
    isprofile && userProfileInfo()
    isprofile && dispatch(setTab(null))

    return () => {
      dispatch(setTab(null))
      dispatch(setcurrentCommunity(''))
    }
  }, [join, leaved, updated, userNameGot])
  return (
    <div className='singleCommunityPage'>
      {
        isprofile ? (
          <ProfileWrapper isUser={true} name={profileInfo.userName} profile={profile} isLoading={loading} />
        ) : (
          <ProfileWrapper isUser={false} isCommunity={true} name={info.name} admin={info.admin} isMember={isMember} setJoin={setJoin} setPosted={setPosted} isAdmin={isAdmin} setLeaved={setLeaved} setUpdated={setUpdated} profile={profile} isLoading={loading} />
        )
      }
      <div className='profileContent'>
        <div className="aboutSection">
          <div className="bio">
            <h4>Bio</h4>
            {
              isprofile ? (<p className='biotext'>
                {profileInfo.bio} 
              </p>) : (
                <p className='biotext'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                </p>
              )
            }
          </div>
          <div className="followdetails">

            {/* follow details section  */}
            {/* ........................*/}
            {
              isprofile === false && 
                 <div className='followDetItem'>
                  <div className='folitm'><span className='mainName' >Members</span> <span className='count' style={{marginRight:'3rem'}}>{info.members}</span></div>
                  <div className='folitm'><span className='mainName'>Posts</span> <span className='count' style={{marginRight:'3rem'}}>{info.postsNo}</span></div>
                </div>
            }
            {
              isprofile && <div>
                <div className='followDetItem'>
                  <span className='mainName'>Communitites</span> <span className='count'>
                    {userFollowPost.communCount}
                  </span>
                </div>
                <div className='followDetItem'>
                  <span className='mainName'>Posts</span> <span className='count'>{userFollowPost.postCount}</span>
                </div>
              </div>
            }
            {/* follow details section  */}
            {/* ........................*/}

          </div>
        </div>

        <div className="postSection">
          {
            isprofile ? (
              <PostsProfile isUser={true} userNameGot={userNameGot} />
              // null
            ) : (
              <PostsProfile posted={posted} userNameGot={userNameGot} />
            )
          }
        </div>
      </div>

    </div>
  )
}

export default SingleCommunity