import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { axiosPrivate } from '../../Apis/Axios'
import AuthButton from '../ReusableComponents/AuthButton/AuthButton'
import Spinner from '../ReusableComponents/Spinner/Spinner' 
import './changeProfile.scss'
const ChangeProfile = ({ setShow,setUpdated, which, isUser = false }) => {
    console.log("modal opened , ",which) 
    const fd = new FormData()
    const communityId = useSelector((state) => state.currentCommunity)
    const user = useSelector((state) => state.user) 

    const [profile, setProfile] = useState(null) 
    const [url, setUrl] = useState('')
    const [changed, setChanged] = useState(false)
    const[loading,setLoading] = useState(false) 

    const close = () => {
        setShow(false)
    }

    const handleChange = (e) => {
        console.log(e)
        const file = e.target.files[0]
        setProfile(e.target.files[0])
        setUrl(URL.createObjectURL(file))
        setChanged(true)
    }

    console.log("profie", profile)

    const uploadImage = () => {
        fd.append('communityId', communityId)
        fd.append('image', profile)
        setLoading(true) 
        which === 'cover' && fd.append('cover',true) 
        isUser ? fd.append('userId',user.id) : fd.append('userId','')  

        axios.post('http://localhost:5000/update-profilePicture', fd, 
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true  
            }).then((res) => {
                console.log(res)
                setLoading(false) 
                close()
                setUpdated(true) 
            }).catch((err) => {
                console.log(err)
                setLoading(false) 

            })
    }

    return (
        <>
            {
                loading && <Spinner /> 
            }
            {
                changed ? (
                    <div className='changeProfileDiv'>
                        <div className="image-previe-profile">
                            <img src={url} height={'50px'} width={'50px'} alt="" />
                        </div>
                        <div className="buttonProfileEDit">
                            <div className='upload-image-onclick' onClick={uploadImage}> 
                                <AuthButton label={'Upload'} width={'100px'} height={'20px'}></AuthButton></div>
                            <div className='upload-goback' onClick={() => { setChanged(false) }}><AuthButton label={'Go back'} width={'100px'} height={'20px'}></AuthButton></div> 
                        </div>
                    </div> 
                ) : (
                    < div className='changeProfileDiv'>
                        <div className='changeProfile-item change-the-profile'> 
                            <label htmlFor='change-profile' className='change-profile-label'>Upload an image</label>
                            <input id='change-profile' name='image' type="file" className='change-profile-input' onChange={handleChange} />
                        </div>
                        <div className='changeProfile-item remove-current-photo'>
                            <p>Remove current photo</p>
                        </div>
                        <div className='changeProfile-item close-profile-modal' onClick={close}>
                            <p>Cancel</p>
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default ChangeProfile