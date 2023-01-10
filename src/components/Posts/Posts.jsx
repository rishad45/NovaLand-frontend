import { useState, useEffect } from 'react'
import Post from '../Post/Post';
import { axiosPrivate } from '../../Apis/Axios';
import './posts.scss'
import {Link} from 'react-router-dom' 
const Posts = () => {
  const [allPosts, setAllPosts] = useState([])
  const [deleted, setDeleted] = useState(false)
  const getPosts = () => {
    axiosPrivate.post('/get-posts-ofUser').then((res) => {
      console.log("posts are fetching", res.data.allPosts)
      setAllPosts(res.data.allPosts)
    })
  }

  useEffect(() => {
    getPosts()
  }, [deleted])

  return (
    <div className='posts'> 
      {
        allPosts.length === 0 ? (<div style={{height:'40vh',width:'100%',display: 'flex', alignItems:'center',justifyContent:'center', flexDirection:'column'}}> 
          <h3>Follow More communities to see posts</h3>
          <Link to={'/communities'}>Tap to See all communities</Link>
        </div>) :
          allPosts.map((post) => {
            return <Post post={post} key={post.post._id} setDeleted={setDeleted} />
          })
      }
    </div>
  )
}

export default Posts