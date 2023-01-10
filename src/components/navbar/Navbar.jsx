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
import {setuser} from '../../Redux/Slices/userSlice' 

const Navbar = () => {
  const user = useSelector((state) => state.user)   
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { toggle, darkMode } = useContext(DarkModeContext);

  // functions 
  const logout = () => {
    axiosPrivate.post('/logout').then(res => {
      console.log(res)
      dispatch(setuser({
        id : '',    
        username : '',
        email : '',
        bio : '',
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
  },[user])  

  return (
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
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        {/* <PersonOutlinedIcon /> */}
        {/* <EmailOutlinedIcon /> */}
        {/* <Link to='/login'>login</Link> */}
        {/* <ChatOutlinedIcon/> */}
        {/* <BsChatSquareQuoteFill size={'1.5em'} /> */}
        {/* <NotificationsOutlinedIcon /> */}
        <div className="user">
          <button className="userProfileonNav" onClick={handleClick}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
