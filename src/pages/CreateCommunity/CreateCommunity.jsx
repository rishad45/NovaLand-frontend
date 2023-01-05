import { useEffect } from 'react'
import { useState } from 'react'
import AuthButton from '../../components/ReusableComponents/AuthButton/AuthButton'
import Button from '../../components/ReusableComponents/Button/Button'
import ProfileCard from '../../components/ReusableComponents/ProfileCards/ProfileCard'
import './createCommunity.scss'
import {axiosPrivate} from '../../Apis/Axios' 
import {axioswithMedia} from '../../Apis/Axios'
import axios from 'axios'

const CreateCommunity = () => {

    const [data, setData] = useState({
        comName : '',
        category : '',
        privacy : 'Private',
        // profile : null
    }) 


    // const [file,setFile] = useState(null) 

    const handleChange = (e)=>{
        setData({...data, [e.target.name] : e.target.value}) 
    } 

    const handleFileChange = (e) => {
        console.log(1) 
        setData({...data, [e.target.name] : e.target.files[0]})  
        // formdata.append('image', e.target.files[0]) 
    } 

    const handleSubmit = async(e) => {
        e.preventDefault() 
        // const formData = new FormData() 
        // formData.append('profile' , data.profile) 
        console.log(data) 
        await axiosPrivate.post('/create-community',data).then((res)=>{
            console.log(res) 
        })
    }

    useEffect(()=>{
        console.log(data)
    },[data]) 

    let src = "https://images.pexels.com/photos/14251457/pexels-photo-14251457.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    return (
        <div className='create-community'>
            <h2 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '5px' }}>Create a community</h2>
            <ProfileCard width='100%' height='5vh' src={src} mainName='Rishad' subName='Admin' />
            <div className="create-com-form">
                <form  onSubmit={handleSubmit} encType='multipart/form-data'> 
                    <span>Community name</span>
                    <div className="ip-grp">
                        <input type="text" name='comName' value={data.comName} onChange = {handleChange}/> 
                    </div>
                    <span>Select category</span>
                    <div className="ip-grp">
                        <select name='category' value={data.category} onChange = {handleChange}>  
                            <option value="game">game</option>
                            <option value="beauty">beauty</option>
                            <option value="art">art</option>
                            <option value="sports">sports</option>
                        </select>
                    </div>
                    <span>Select Privacy</span>
                    <div className="ip-grp">
                        <select name='privacy' onChange={handleChange}> 
                            <option value="Private">Private</option>
                            <option value="Public">Public</option> 
                        </select>
                    </div>
                    {/* <span>Select profile picture</span>
                    <input type="file" name='profile' onChange={handleFileChange} /> */} 
                    <AuthButton width={'100px'} height='30px' label='submit'/>
                </form>
            </div>
        </div>
    )
}

export default CreateCommunity