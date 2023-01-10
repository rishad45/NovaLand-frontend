import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { axiosPrivate } from '../../Apis/Axios'
import EmptyMessage from '../ReusableComponents/EmptyMessage/EmptyMessage'
import Spinner from '../ReusableComponents/Spinner/Spinner'
import './postProfile.scss'
const PostsProfile = ({ posted = false, isUser = false, userNameGot = false }) => { 
    const currentUser = useSelector((state) => state.user) 
    const currentCommunity = useSelector((state) => state.currentCommunity)
    const [isLoading, setLoading] = useState(false) 
    const [emptyMessage, setEmptyMessage] = useState({
        empty: false,
        message: ''
    })
    const [posts, setPosts] = useState([])
    // get all the post images 
    const getAllPostImages = async () => {
        // set loading true
        setLoading(true)
        let payload 
        if (isUser) {
            payload = {
                userPosts: true
            }
        } else {
            payload = {
                communityId: currentCommunity,
                userPosts: false
            }
        }
        console.log("payload", payload) 
        await axiosPrivate.post('/get-community-posts', payload).then((result) => {
            if (result.data.posts.length === 0) {
                setEmptyMessage({
                    empty: true,
                    message: 'No posts yet'
                })
            } else {
                setPosts(result.data.posts)
            }
        })
        // set loading false
        setLoading(false)
    }
    useEffect(() => {
        getAllPostImages() 
    }, [posted,userNameGot]) 

    return (
        <div className='postsProfile'>
            <div className='imageGrid'>
                {
                    isLoading && <Spinner />
                }
                {
                    emptyMessage.empty && <EmptyMessage text={emptyMessage.message} />
                }
                {
                    posts.map((i) => {
                        return <div className='profilePost' key={i.postId} >
                            <img src={i.url} alt="" />
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default PostsProfile