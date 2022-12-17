import { useEffect, useState } from 'react'
// import { axiosPrivate as axios} from '../../Apis/Axios'; 
// import axios from '../../Apis/Axios'
import useAxiosprivate from '../../Hooks/useAxiosprivate';
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
import { useNavigate } from 'react-router-dom';

const LeftBar = () => {
  const axiosPrivate = useAxiosprivate()
  let isMounted = true
  // const [user, setUser] = useState('')
  const controller = new AbortController()
  const navigate = useNavigate()
  // get user function
  // const getUser = async () => {
  //   try {
  //     const response = await axiosPrivate.post('/get-user', {
  //       signal: controller.signal
  //     })
  //     console.log(response.data)
  //     isMounted && setUser(response?.data?.userName)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // // on mounting 
  // useEffect(() => {
  //   getUser()
  //   console.log(user)
  //   //cleanup
  //   return () => {
  //     // isMounted = false
  //     controller.abort()
  //   }
  // }, [])


  const menu = [
    {
      icon: <HomeOutlinedIcon />,
      label: 'Home',
      route : '/'
    },
    {
      icon: <Diversity3OutlinedIcon />,
      label: 'Communities',
      route : 'communities'
    },
    {
      icon: <NotificationsActiveOutlinedIcon />,
      label: 'Notifications',
      route : 'notifications'
    },
    {
      icon: <CalendarMonthIcon />,
      label: 'Events',
      route : 'events'
    },
    {
      icon: <SettingsOutlinedIcon />,
      label: 'Settings',
      route : 'settings'
    },
  ]

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="top">
            <Card width={'200px'} height={'10vh'} className='card'>
              <div className="userProfile">
                <img src="https://i.pinimg.com/236x/dd/e9/f3/dde9f341bb8aa274949d0b0ef347352d.jpg" alt="" />
              </div>
              <div className="userNames">
                  <span className="name">Rishad</span>
                <span className="userName">@whois_rishad</span>
              </div>
            </Card>
          </div>

        </div>
        <hr />
        <div className="menu">
          <span>Explore the world</span>
          {
            menu.map((item, index) => {
              return <div className="item" key={index}>
                {/* <img src={Events} alt="" /> */}
                {item.icon}
                <span>{item.label}</span>
              </div>
            })
          }

        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item" onClick={()=> {
            navigate('/create-community') 
          }}>
          <AddCircleIcon/>
            <span>Create community</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
