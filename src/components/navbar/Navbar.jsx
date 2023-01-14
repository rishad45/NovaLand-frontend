import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { BsChatSquareQuoteFill } from 'react-icons/bs'
import { Menu, MenuItem } from '@mui/material'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { axiosPrivate } from "../../Apis/Axios";
import { useDispatch, useSelector } from "react-redux";
import { setuser } from '../../Redux/Slices/userSlice'
import { regSw, subscribe } from '../../helper'
import Spinner from '../ReusableComponents/Spinner/Spinner'
import {setcurrentCommunity} from '../../Redux/Slices/communitySlice'
import axios from "axios";

const Navbar = ({admin = false}) => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // search functionalities
  const [searchKey, setSearchkey] = useState('');
  const [searchResult, setSearchRes] = useState([]);
  const[loading,setLoading] = useState(false)

  const handleChange = (e) => {
    e.target.value === '' ? setDiv(false) : setDiv(true)
    setSearchkey(e.target.value);
    if (e.target.value !== '') {
      setLoading(true);
      axiosPrivate.post('/search', {
        key: e.target.value
      }).then((res) => {
        console.log(res);
        setLoading(false)
        setSearchRes(res.data.result);
      })
    }
  }
  const [div, setDiv] = useState(false)
  const showDiv = (cond) => {
    setDiv(cond);
  }

  const setGo = (id) => {
    setSearchkey('');
    dispatch(setcurrentCommunity(id))
    navigate('/singleCommunity')
    showDiv(false);
  }
  //.......................
  const { toggle, darkMode } = useContext(DarkModeContext);

  // functions 
  const registerAndSubscribe = async () => {
    try {
      const serviceWorkerReg = await regSw()
      await subscribe(serviceWorkerReg)
    } catch (error) {
      console.log(error)
    }
  }

  const sendMessage = () => {
    if (window.confirm("Turn on your notification ?")) {
      registerAndSubscribe()
    }
  }
  const logout = () => {
    axiosPrivate.post('/logout').then(res => {
      console.log(res)
      dispatch(setuser({
        id: '',
        username: '',
        email: '',
        bio: '',
        profileUrl: '',
      }))
      navigate('/login')
    })
  }

  const openProfile = () => {
    navigate(`/profile/${user.username}`)
    closeMenu()
  }

  // menu
  const [anchorEl, setAnchorEl] = useState(null)
  const opened = Boolean(anchorEl)

  const handleClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  }

  const closeMenu = (e) => {
    setAnchorEl(null);
  }



  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <>
      <div className="navbar">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={opened}
          onClose={closeMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        ><div>
            <MenuItem onClick={openProfile}>
              <AccountCircleOutlinedIcon /><span style={{ marginLeft: '12px' }}>Profile</span>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <BookmarkBorderOutlinedIcon />
              <span style={{ marginLeft: '12px' }}>Saved</span>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <SettingsOutlinedIcon />
              <span style={{ marginLeft: '12px' }}>Settings</span>
            </MenuItem>
            <MenuItem onClick={sendMessage}>
              <NotificationsOutlinedIcon />
              <span style={{ marginLeft: '12px' }}>Turn on Push notifications</span>
            </MenuItem>
            <MenuItem onClick={logout} sx={{ borderTop: '1px solid black', color: 'red' }}>
              <LogoutOutlinedIcon />
              <span style={{ marginLeft: '12px' }}>Logout</span>
            </MenuItem>
          </div>
        </Menu>
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>NovaLand</span>
          </Link>
          {/* <HomeOutlinedIcon /> */}
          {
            darkMode ? (
              <WbSunnyOutlinedIcon onClick={toggle} />
            ) : <DarkModeOutlinedIcon onClick={toggle} />
          }
          {/* <GridViewOutlinedIcon /> */}
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." value={searchKey} onChange={handleChange} />
          </div>
        </div>
        <div className="right">
          <div className="user">
            <button className="userProfileonNav" onClick={handleClick}>
              <img
                src={user.profileUrl ? user.profileUrl : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}
                alt="error"
              />
            </button>
          </div>
        </div>
        <div className="searchRes" style={div ? { display: 'block' } : { display: 'none' }}>
          {
            loading && <Spinner/>
          }
          {
            searchResult.length === 0 ? (
              <p>No search Results found</p>
            ) : (
              searchResult.map((item) => {
                return <div className="singleRes" key={item._id} onClick={() => {setGo(item._id)}}>
                  <div className="leftSingle">
                    <div className="leftImg">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="rightSingle">
                    <span>{item.name}</span>
                  </div>
                </div>
              })
            )
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
