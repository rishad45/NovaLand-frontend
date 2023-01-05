import './singleComment.scss'
import { useEffect, useState } from 'react'
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined'
import { Box, Menu, MenuItem, Typography, Modal } from '@mui/material'
import { FavoriteBorderOutlined, MoreHorizOutlined } from '@mui/icons-material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FlagIcon from '@mui/icons-material/Flag';
import { red } from '@mui/material/colors'
import { useSelector } from 'react-redux'
import { axiosPrivate } from '../../../Apis/Axios'
import ReportContents from '../../ReportContents/ReportContents'

const SingleComment = ({ commentData, setDeleted }) => {
    useEffect(() => {
        setCommentLiked(commentData.liked)
        setCommentLikes(commentData.commentLikes)
    }, [])
    console.log("comdata", commentData)
    const [commentLiked, setCommentLiked] = useState(false)
    const [nowLiked, setNowLiked] = useState(false)
    const [commentLikes, setCommentLikes] = useState(null)
    console.log("isLiked", commentData.liked)
    // modal fn
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 330,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        closeMenu()
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    // user 
    const user = useSelector((state) => state.user)
    const [anchorEl, setAnchorEl] = useState(null)
    const opened = Boolean(anchorEl)
    const handleClick = (event) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    }

    const closeMenu = (e) => {
        setAnchorEl(null);
    }

    // delete comment
    const deleteComment = () => {
        axiosPrivate.post('/delete-this-comment', {
            commentId: commentData._id
        }).then((res) => {
            console.log(res.data.message)
            closeMenu()
            setDeleted(true)
        }).catch((err) => {
            console.log(err)
        })
    }

    // like comment
    const likeComment = () => {
        console.log("liked")
        setCommentLikes(commentLikes + 1)
        setCommentLiked(true)
        axiosPrivate.post('/like-this-comment', {
            commentId: commentData._id
        })
    }

    const unlikeComment = () => {
        setCommentLikes(commentLikes - 1)
        setCommentLiked(false)
        axiosPrivate.post('/unlike-this-comment', {
            commentId: commentData._id
        }) 
    }

    return (
        <div className='singleComment'>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opened}
                onClose={closeMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            ><div>
                    <MenuItem onClick={handleOpen}>
                        <FlagIcon /><span style={{ marginLeft: '5px' }}>Report</span>
                    </MenuItem>
                    {
                        commentData.userDetails[0]._id === user.id ? (
                            <MenuItem onClick={deleteComment} sx={{ color: red['A700'] }}>
                                <DeleteOutlineIcon /><span style={{ marginLeft: '5px' }}>Delete</span>
                            </MenuItem>) : null
                    }
                </div>
            </Menu>

            <div className="comment-data">
                <div className="singleCommenter-profile">
                    <img src="https://i.pinimg.com/564x/3a/91/11/3a9111556b14b9fc258468995f966224.jpg" alt="" />
                </div>
                <div className="name-and-comment">
                    <div className="comment-part">
                        <span className='comment-commenter'>{commentData.userDetails[0].userName}</span>
                        <span className='comment-conetent'>{commentData.comment}</span>
                    </div>
                    <div className="liked-and-details">
                        <span className='commented-time'>4m ago</span>
                        <span className='comment-liked-by'>{commentLikes} like</span>
                        <span className='comment-reply-button'>reply</span>
                        <span className='comment-report-delete-button' onClick={handleClick}>
                            <MoreHorizOutlined fontSize='100px' />
                        </span>
                    </div>
                </div>
                <div className="comment-like-button">
                    {
                        commentLiked ?
                            <div onClick={unlikeComment}><FavoriteOutlined sx={{ color: red['A700'], fontSize: '14px' }} /></div>
                            : <div onClick={likeComment}><FavoriteBorderOutlined sx={{ fontSize: '15px' }} /></div>
                    }
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" 
            >
                <Box sx={style}>
                    <Typography sx={{ textAlign: 'center' }} id="modal-modal-title" variant="h5" component="h5">
                        Report
                    </Typography>
                    <Typography id='modal-modal-subTitle' sx={{ mt: 2, fontSize: '16px', textAlign: 'center' }} variant='p' component='p' >
                        Why are you reporting this comment?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ReportContents id={commentData._id} handleClose={handleClose} />
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default SingleComment