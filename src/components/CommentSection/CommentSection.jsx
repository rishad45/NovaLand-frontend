import './commentSection.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SingleComment from '../ReusableComponents/singleComment/SingleComment';
import CommentFooter from '../CommentFooter/CommentFooter';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '../../Apis/Axios';
import { toast, ToastContainer } from 'react-toastify';

const CommentSection = ({ post, likes, liked, setLikes, setLiked,likePost, unLikePost }) => { 
    const toastoptions = {
        position: "bottom-left",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true
    }
    const [comments, setComments] = useState([])
    const[commented,setComented] = useState(false) 
    const[deleted,setDeleted] = useState(false)
    const getComments = () => {
        axiosPrivate.post('/get-comments-of-post', {
            postId: post.post._id
        }).then((res) => {
            console.log(res.data.comments)
            setComments(res.data.comments)
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }
    useEffect(() => {
        getComments()
    }, [commented,deleted])  



    return (
        <div className="modal-comment-content">
            <div className="modal-post-image">
                <img className='comment-section-image' src={post.url} alt='error'></img>
            </div>
            <div className="modal-all-comments">
                {/* header  */}
                <div className="modal-comment-headerPart">
                    <div className="header-profile">
                        <img className='header-profile-image' src={post.communityDp} alt="" />
                    </div>
                    <div className="header-nameCommunity">
                        <span>{post.name}</span>
                    </div>
                    <div className="header-options">
                        <MoreVertIcon />
                    </div> 
                </div>
                {/* comment part  */}
                {
                    comments.length === 0 ? (
                        <div className="emptyComments">
                            <span>No Comments yet</span>
                        </div>
                    ) : (
                        <div className="modal-comment-commentsPart">
                            {
                                comments.map((i) => {
                                    return <SingleComment key={i._id} commentData={i} setDeleted={setDeleted} />
                                })
                            }
                        </div>
                    )
                } 
                {/* footer  */}
                <div className="modal-comment-footerPart">
                    <CommentFooter likes={likes} liked={liked} postId={post.post._id} setCommented = {setComented} likePost={likePost} unLikePost={unLikePost} />
                </div>
            </div>
            <div style={{ bottom: 0, left: 0 }}>
                <ToastContainer />
            </div>
        </div>
    )
}

export default CommentSection