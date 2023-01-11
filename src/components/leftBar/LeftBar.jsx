import { useEffect, useState } from 'react'
// import { axiosPrivate as axios} from '../../Apis/Axios'; 
// import axios from '../../Apis/Axios'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import Card from "../ReusableComponents/Card/Card";
//mui icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { setcurrentCommunity } from '../../Redux/Slices/communitySlice'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axiosPrivate } from '../../Apis/Axios'

const LeftBar = () => {

  const [profile, setProfile] = useState('')
  const dispatch = useDispatch()
  const currTab = useSelector((state) => state.tab)
  const user = useSelector((state) => state.user)
  let isMounted = true
  const controller = new AbortController()
  const navigate = useNavigate()
  const goto = (route) => {
    console.log("clicked")
    navigate(route)
  }

  const getUserProfile = () => {
    axiosPrivate.post('/get-userProfile').then(res => {
      console.log(res)
      setProfile(res.data.profile)
    })
  }

  const refresh = useSelector((state) => state.globalRefresh)
  const menu = [
    {
      icon: <HomeOutlinedIcon />,
      label: 'Home',
      route: '/'
    },
    {
      icon: <Diversity3OutlinedIcon />,
      label: 'Communities',
      route: '/communities'
    },
    {
      icon: <NotificationsActiveOutlinedIcon />,
      label: 'Notifications',
      route: '/notifications'
    },
    {
      icon: <CalendarMonthIcon />,
      label: 'Messages',
      route: '/chats'
    },
    {
      icon: <SettingsOutlinedIcon />,
      label: 'Settings',
      route: '/settings'
    },
  ]

  useEffect(() => {
    getUserProfile() 
  }, [user, refresh])

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="top" onClick={() => { navigate(`profile/${user.username}`) }}>
            <Card width={'200px'} height={'10vh'} className='card' >
              <div className="userProfile">
                <img src={user.profileUrl} alt="" />
              </div>
              <div className="userNames">
                <span className="name">{
                  user.username.length <= 15 ? user.username : user.username.slice(0,15)
                }
                </span>
                {/* <span className="userName">@whois_rishad</span> */}
              </div>
            </Card>
          </div>

        </div>
        <hr />
        <div className="menu">
          <span>Explore the world</span>
          {
            menu.map((item, index) => {
              return <div className={currTab === index ? 'currTab item' : 'item'} key={index} onClick={() => navigate(item.route)}>
                {item.icon}
                <span className='iconLabel'>{item.label}</span>
              </div>
            })
          }

        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item" onClick={() => {
            dispatch(setcurrentCommunity(''))
            navigate('/create-community')
          }}>
            <AddCircleIcon />
            <span className='iconLabel'>Create community</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span className='iconLabel'>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span className='iconLabel'>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
