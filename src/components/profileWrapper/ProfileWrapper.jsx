import { useState } from 'react';
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import IosShareIcon from '@mui/icons-material/IosShare';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChangeProfile from '../ChangeProfile/ChangeProfile';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// for modal
import ModalCustom from '../Modal/ModalCustom';
import { Box, Button, Typography, Modal, Menu, MenuItem } from '@mui/material'

import './profileWrapper.scss'
import PostContent from '../PostContent/PostContent.jsx'
import { useSelector } from 'react-redux';
import { axiosPrivate } from '../../Apis/Axios';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../ReusableComponents/Spinner/Spinner';
import { useEffect } from 'react';
import ProfileEdit from '../ProfileEdit/ProfileEdit';

const ProfileWrapper = ({ isUser = false, isCommunity = false, name, admin = null, isMember = false, setJoin, setPosted, isAdmin = false, setLeaved, setUpdated, profile, isLoading}) => { 
    const refresh = useSelector((state) => state.globalRefresh) 

    // current community
    const currentCommunity = useSelector((state) => state.currentCommunity)
    // ...........setting up the menu
    const [anchorEl, setAnchorEl] = useState(null)
    const opened = Boolean(anchorEl)
    console.log("opened?", opened)

    const handleClick = (event) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    }

    const closeMenu = (e) => {
        setAnchorEl(null);
        console.log("closed")
    }
    // .............Leave community
    const leaveCommunity = () => {
        axiosPrivate.post('/leave-community', {
            communityId: currentCommunity
        }).then((res) => {
            if (res.status === 200) {
                toast.success(res.data.message)
                closeMenu()
                setLeaved(true)
            } else {
                toast.error(res.data.message)
                closeMenu()
            }
        })
    }

    const joinCommunity = (e) => {
        e.stopPropagation()
        console.log("clicked")
        const payload = {
            communityId: currentCommunity
        }
        axiosPrivate.post('/joinInCommunity', payload).then((res) => {
            console.log(res)
            setJoin(true)
        })
    }

    const [show, setShow] = useState(false)
    const [postModal, showPostmodal] = useState(false)
    const [whichEdit, setWhichEdit] = useState('')

    const changeProfile = (e) => {
        e.stopPropagation()
        setShow(true)
    }

    const createPost = (e) => {
        e.stopPropagation()
        showPostmodal(true)
    }
    const handleClose = () => showPostmodal(false) 

    const modalStyle = {
        top: '50%',
        left: '50%',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
        borderRadius: '15px'
    };

    const editmodalStyle = {
        top: '50%',
        left: '50%',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
        borderRadius: '15px'
    };

    // .................................
    const[showProfileEdit,setshowProfileEdit] = useState(false) 
    const editProfile = (e) => {
        e.stopPropagation() 
        setshowProfileEdit(true)  
    }

    useEffect(()=>{
    console.log(refresh) 
    },[refresh])  

    return (
        <div className='all-profile-wrapper'>
            <ModalCustom show={show} setShow={setShow} style={modalStyle} title={whichEdit === 'profile' ? 'Change Profile Photo' : 'Change Cover Photo'}>
                {
                    isUser ? (
                        <ChangeProfile setShow={setShow} setUpdated={setUpdated} which={whichEdit} isUser={true} /> 
                    ) : (
                        <ChangeProfile setShow={setShow} setUpdated={setUpdated} which={whichEdit} />

                    )
                }
            </ModalCustom>

            <ModalCustom show={showProfileEdit} setShow={setshowProfileEdit} style={editmodalStyle} title={'Edit Profile'}> 
                <ProfileEdit profile={profile.profile} closeModal={setshowProfileEdit}  /> 
            </ModalCustom>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opened}
                onClose={closeMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    (isAdmin && isMember) && <div>
                        <MenuItem onClick={closeMenu}>Edit Profile</MenuItem>
                        <MenuItem onClick={closeMenu}>Launch an Event</MenuItem>
                        <MenuItem onClick={closeMenu}>Join Requests</MenuItem>
                        <MenuItem onClick={closeMenu}>Admin Requests</MenuItem>
                        <MenuItem onClick={closeMenu}>Flagged posts</MenuItem>
                        <MenuItem onClick={closeMenu}>Share Profile</MenuItem>
                        <MenuItem onClick={closeMenu}>Delete this community</MenuItem>
                    </div>
                }

                {
                    (isMember && !isAdmin) &&
                    <div>
                        <MenuItem onClick={closeMenu}>Report Community</MenuItem>
                        <MenuItem onClick={leaveCommunity}>Leave Community</MenuItem>
                        <MenuItem onClick={closeMenu}>Request Admin</MenuItem>
                        <MenuItem onClick={closeMenu}>Share Profile</MenuItem>
                    </div>
                }

                {
                    (!isMember && !isAdmin && !isUser) && <div>
                        <MenuItem onClick={closeMenu}>Report Community</MenuItem>
                        <MenuItem onClick={closeMenu}>Request Admin</MenuItem>
                        <MenuItem onClick={closeMenu}>Share Profile</MenuItem>
                    </div>
                }

                {
                    isUser && <div>
                        <MenuItem onClick={closeMenu}>Edit profile</MenuItem>
                        <MenuItem onClick={closeMenu}>Settings</MenuItem>
                    </div>
                }

            </Menu>
            {
                isUser ? null : (

                    <div className="communityPageOptions">
                        <button
                            className='menuButton'
                            id="basic-button"

                            aria-controls={opened ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={opened ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </button>

                    </div>
                )
            }

            <ModalCustom show={postModal} setShow={showPostmodal} title={'Post your content'} >
                <PostContent handleClose={handleClose} setPosted={setPosted} />
            </ModalCustom>

            {/* profile picture wrap  */}
            {/* ........................ */}
            {
                isUser ? (
                    <div className='profile-picture-wrap'>
                        {
                            isLoading ? <Spinner /> : (
                                <div className='changeProfileDivforu' style={{ height: '100%', width: '100%' }} onClick={() => {
                                    setWhichEdit('profile')
                                    setShow(true)
                                    console.log("which one", whichEdit)
                                }}>
                                    <img className='dp adminProfileImage' src={profile.profile} alt="not found" />
                                    <div className='changeProfileText'>change profile picture</div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className='profile-picture-wrap'>
                        {
                            (isAdmin) &&
                            <div className='changeProfileDivforu' style={{ height: '100%', width: '100%' }} onClick={() => {
                                setWhichEdit('profile')
                                setShow(true)
                                console.log("which one", whichEdit)
                            }}>
                                <img className='dp adminProfileImage' src={profile.profile} alt="not found" />
                                <div className='changeProfileText'>change profile picture</div>
                            </div>
                        }

                        {
                            !isAdmin && <img className='dp' src={profile.profile} alt="" />
                        }
                        {
                            !isMember ? (<div className='profileFollow' onClick={joinCommunity}>
                                <AuthButton width={'100px'} height='20px' label='Join' />
                            </div>) : ''
                        }
                    </div>
                )
            }

            {/* profile picture wrap enddddd */}
            {/* ........................ */}

            {
                isUser ? (
                    // if it is a user page  
                    <div className='profile-wrapper wrapperAdmin' style={{
                        background: `url(${profile.cover})`
                    }} onClick={() => {
                        console.log("clicked")
                        setWhichEdit('cover')
                        setShow(true)
                        console.log("which one", whichEdit)
                    }}>
                        <div className="changeCoverText">
                            <span>Edit Cover photo</span>
                        </div>
                        <div className="profile-details-wrapper">
                            <div className='profile-empty'>

                            </div>
                            <div className="profile-name-container">
                                <h2>{
                                name.length <= 15 ? name : name.slice(0,15)
                                }</h2>
                            </div>
                            <div className="profile-share-container">
                                <div className='profile-cover-button' style={{ width: '100px', height: '20px' }} onClick={editProfile}> 
                                    <ModeEditOutlineIcon className='profile-button-icon'/>
                                    <span className='profile-button-text'>Edit profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // if it is a community page 
                    <div className={isAdmin ? 'profile-wrapper wrapperAdmin' : 'profile-wrapper'} style={{
                        background: `url(${profile.cover})`
                    }} onClick={() => {
                        console.log("clicked")
                        setWhichEdit('cover')
                        setShow(true)
                        console.log("which one", whichEdit)
                    }}>
                        <div className="changeCoverText">
                            <span>Edit Cover photo</span>
                        </div>
                        <div className="profile-details-wrapper">
                            <div className='profile-empty'>

                            </div>
                            <div className="profile-name-container">
                                <h2>{name}</h2>
                                <p>created by {admin}</p>
                            </div>
                            {
                                isMember && <div className="profile-share-container">
                                    {
                                        isUser && <div className='profile-cover-button' style={{ width: '100px', height: '20px' }}>
                                            <IosShareIcon className='profile-button-icon' />
                                            <span className='profile-button-text'>Share Profile</span>
                                        </div>
                                    }
                                    {
                                        isCommunity && <div className="profile-cover-button" onClick={createPost}>
                                            {/* <input className='custom-file-input' type="file" onChange={postContent} /> */}
                                            <CreateIcon className='profile-button-icon' />
                                            {
                                                <span className='profile-button-text'>Post your content</span>
                                            }
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                )
            }
            <ToastContainer />
        </div>
    )
}

export default ProfileWrapper