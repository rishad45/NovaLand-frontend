import React from 'react'
import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';


const Post = ({ post }) => {
  const liked = false
  return (
    <div className='post'>
      <div className="container">
        <div className='user'>
          <div className='userInfo'>
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link style={{ textDecoration: "none", color: 'inherit' }}>
                <span className='name'>{post.name}</span>
              </Link>
                <span className='postTime'>1 minute ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className='content'>
          <p className='postDescription'>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className='info'>
          <div className="item">
            {
              liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>
            }
            12 Likes
          </div>
          <div className="item">
            <TextsmsOutlinedIcon/>
            12 Comments 
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post