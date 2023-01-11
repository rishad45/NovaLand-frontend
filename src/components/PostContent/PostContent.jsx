import './postContent.scss'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { axiosPrivate } from '../../Apis/Axios'
import axios from 'axios'
import useNotification from '../../Hooks/useNotification'
function PostContent({ handleClose, setPosted }) {
  const{sendNotification} = useNotification()
  // current community id
  const communityId = useSelector((state) => state.currentCommunity)
  console.log("looke here for commId", communityId)
  //formdata
  let fd = new FormData()
  // url state
  const [src, setSrc] = useState('')
  // post details state
  const [post, setPost] = useState({
    image: null,
    description: '',
    location: ''
  })

  const handleChange = (e) => {
    const file = e.target.files[0]
    setPost({
      ...post,
      [e.target.name]: e.target.files[0]
    })
    setSrc(URL.createObjectURL(file))
  }

  const handlePost = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const onUploadProgress = (progressEvent) => { 
    const { loaded, total } = progressEvent;
    let percent = Math.floor((loaded * 100) / total); 
    if (percent < 100) {
      console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
    }
  }

  const handleClick = (e) => {
    console.log("clickeddd",fd) 
    fd.append('image', post.image)
    fd.append('description', post.description)
    fd.append('location', post.location)
    fd.append('communityId', communityId)
    console.log(fd) 
    console.log(post)
    axios.post('http://localhost:5000/create-post', fd,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true   
      }).then((res) => {
        console.log('post created', res);
        handleClose()
        fd.delete('image')
        fd.delete('description')
        fd.delete('location')
        fd.delete('communityId') 
        sendNotification()
        setPosted(true)
      })

  }

  useEffect(() => {
    console.log(post)

  }, [post])

  return (
    <div className='postContentModal'>
      <div className="file-input-container">
        <span className='browse-file'>Drag a file here or Browse file</span>
        <input className='post-file-input' name='image' type="file" onChange={handleChange} />
      </div>
      <div className="inputted-content">
        <div className="selected-image">
          <img src={src} alt="Image is not selected" />
        </div>
        <AuthButton width={'9vw'} height={'5vh'} label={'Edit'} />
      </div>

      <div className="input-post-desc">
        <p>Description</p>
        <textarea cols={55} rows={4} name='description' onChange={handlePost} value={post.description}></textarea>
      </div>

      <div className="input-post-location">
        <p>Location</p>
        <input type="text" name="location" onChange={handlePost} value={post.location} />
      </div>
      <div onClick={handleClick}>
        <AuthButton width={'15vw'} height={'5vh'} label={'Upload'} />
      </div>
    </div>
  )
}

export default PostContent