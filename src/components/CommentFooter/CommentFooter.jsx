import './commentFooter.scss'
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { AiOutlineComment } from 'react-icons/ai'
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { red } from '@mui/material/colors';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosPrivate } from '../../Apis/Axios';

const CommentFooter = ({ likes, liked, postId, setCommented, likePost, unLikePost }) => {
    const toastoptions = {
        position: "bottom-left",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true
    }
    // add comment
    const [comment, setComment] = useState('')

    const handleChange = (e) => {
        setComment(e.target.value)
        console.log(comment)
    }

    const addComment = () => {
        console.log("postId is =>", postId)
        axiosPrivate.post('/add-a-comment', {
            postId: postId,
            comment: comment
        }).then((res) => {
            console.log("res", res)
            if (res.status === 200) {
                console.log(res.data)
                setComment('')
                setCommented(true)
            } else {
                console.log("message")
                toast.error(res.data.message)
            }
        }).catch((res) => {
            console.log(res.response.data.message)
            toast.error(res.response.data.message)
        })
    }

    return (
        <div className='comment-footer-component'>
            <div className="like-comment-share">
                {
                    liked ? <FavoriteOutlined sx={{ color: red['A700'] }} className='like-comment-share-button content-first' onClick={unLikePost} /> : <FavoriteBorderOutlined className='like-comment-share-button content-first' onClick={likePost} />
                }
                <AiOutlineComment className='like-comment-share-button' size={'25px'} />
                <ShareOutlinedIcon className='like-comment-share-button' />
            </div>
            <div className="likes-and-time-inFooter">
                {
                    likes <= 1 ? <span className='content-first like-count'>{likes} like</span> : <span className='content-first like-count'>{likes} likes</span>
                }
                <span className='content-first like-count'>24 MINUTES AGO</span>
            </div>
            <div className="add-a-comment">
                <div className="add-comment-box content-first">
                    <input type="text" className='comment-add-input' name="comment" id="" placeholder='Add a comment...' onChange={handleChange} value={comment} />
                </div>
                {
                    comment.length === 0 ? <button className='postButtonDisabled' disabled >Post</button> : <button className='postButton' onClick={addComment}>Post</button>
                }

            </div>
            <div style={{ bottom: 0, left: 0 }}>
                <ToastContainer />
            </div>
        </div>

    )
}

export default CommentFooter