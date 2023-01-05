import { useState } from 'react'
import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { AiOutlineComment } from 'react-icons/ai'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setcurrentCommunity } from '../../Redux/Slices/communitySlice';
import { Box, Menu, MenuItem, Modal, Button, Typography } from '@mui/material'
import { axiosPrivate } from '../../Apis/Axios';
import { useEffect } from 'react';
import { pink, red, yellow } from '@mui/material/colors';
import CommentSection from '../CommentSection/CommentSection';
import { useSelector } from 'react-redux'
import swal from 'sweetalert';
import ModalCustom from '../Modal/ModalCustom';
import ReportContents from '../ReportContents/ReportContents';
import Save from '../ReusableComponents/Save/Save';

const Post = ({ post, setDeleted }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(null)

  // current user
  const user = useSelector((state) => state.user)
  console.log("user is", user)
  useEffect(() => {
    setLiked(post.liked)
    setLikes(post.totalLikes)
    console.log("single Post", post)
  }, [])
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

  // likePost 
  const likePost = () => {
    console.log("liked")
    setLiked(true)
    setLikes(likes + 1)
    axiosPrivate.post('like-post', { postId: post.post._id }).then((res) => {
      console.log(res)
    })
  }

  // unlike post
  const unLikePost = () => {
    console.log("unliked")
    setLiked(false)
    setLikes(likes - 1)
    axiosPrivate.post('/unlike-post', { postId: post.post._id }).then((res) => {
      console.log(res)
    })
  }
  // set current community
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const setCurrent = (id) => {
    dispatch(setcurrentCommunity(id))
    navigate('/singleCommunity')
  }

  // delete this post

  const deletePost = () => {
    closeMenu()
    swal({
      title: "Delete post?",
      text: "Are you sure you want to delete this post?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        await axiosPrivate.post('/delete-post', {
          postId: post.post._id
        }).then((res) => {
          swal("Your post is deleted", {
            icon: 'success'
          }).then(() => {
            setDeleted(true)
          })
        }).catch(err => {
          swal(err.response.data.message)
        })
      }
    })
  }

  const reportPost = () => {
    console.log("reported")
    setReport(true)
  }

  const savePost = () => {
    console.log("saved") 
  }

  // styles
  // modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  // modal functions
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openReport, setReport] = useState(false)
  const handleReportClose = () => setReport(false)

  const openComment = () => {
    handleOpen()
  }
  const reportStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 330,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  return (
    <div className='post'>
      <div className="container">
        <ModalCustom show={openReport} setShow={setReport} style={reportStyle} title={'Report'} subTitle={'Why are you reporting this post ?'}>
          <ReportContents id={post.post._id} ispost={true} handleClose={handleReportClose} />
        </ModalCustom>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableAutoFocus
          sx={{
            border: 'none'
          }}
        >
          <Box sx={style} >
            <CommentSection post={post} likes={likes} liked={liked} setLikes={setLikes} setLiked={setLiked} likePost={likePost} unLikePost={unLikePost} />
          </Box>
        </Modal>
        <div className='user'>
          <div className='userInfo'>
            <img src={post.url} alt="" />
            <div className="details">
              <div className='detailsDiv' onClick={() => setCurrent(post.post.communityId)}>
                <span className='name'>{post.name}</span>
              </div>
              <span className='postTime'>1 minute ago</span>
            </div>
          </div>
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
          {/* menu  */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={opened}
            onClose={closeMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          ><div>
              <MenuItem onClick={reportPost}>Report</MenuItem>
              <MenuItem onClick={closeMenu}>Leave Community</MenuItem>
              <MenuItem onClick={closeMenu}>Share Post</MenuItem>
              <MenuItem onClick={closeMenu}>Copy Link</MenuItem>
              {
                post.post.userId === user.id || post.communityDetails[0].admin === user.id ? <MenuItem sx={{ color: red['A700'] }} onClick={deletePost}>Delete Post</MenuItem> : null
              }
            </div>
          </Menu>
          {/* menu  */}
        </div>
        <div className='content'>
          <p className='postDescription'>{post.post.description}</p>
          <img src={post.url} alt="" />
        </div>
        <div className='info'>
          <div className="info-like-share-icons">
            <div className="infoLeft">
              <div className="item">
                {
                  liked ? <FavoriteOutlinedIcon sx={{ color: red['A700'] }} onClick={unLikePost} /> : <FavoriteBorderOutlinedIcon onClick={likePost} />
                }
              </div>
              <div className="item" onClick={openComment}>
                {/* <TextsmsOutlinedIcon /> */}
                <div className="commentIcon">
                  <AiOutlineComment />
                </div>
              </div>
              <div className="item">
                <ShareOutlinedIcon />
              </div>
            </div>
            <div className="infoRight">
              <div className="item" onClick={savePost}>
                <Save postId={post.post._id} isSaved={post.saved}/>  
              </div>
            </div>
          </div>
          <div className="info-likes">
            {
              likes <= 1 ? <span>{likes} like</span> : <span>{likes} likes</span> 
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post