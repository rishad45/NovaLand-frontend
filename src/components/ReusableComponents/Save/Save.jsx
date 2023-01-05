import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '../../../Apis/Axios';
const Save = ({ postId, isSaved}) => { 
    const [saved, setSaved] = useState(false)
    const [save,setSave] = useState(false) 
    // request to save post
    const savePost = () => {
        setSaved(true) 
        console.log("postId", postId) 
        console.log("saved") 
        axiosPrivate.post('save-post',{
            postId : postId 
        }).then((res)=> {
            console.log(res) 
            setSave(true) 
        })
    }
    // request to unsave post
    const unSave = () => {
        setSaved(false) 
        axiosPrivate.post('/unsave-post',{
            postId : postId
        }).then(res => {
            console.log(res.data.message) 
            setSave(true) 
        })
    } 
    useEffect(() => {
        setSaved(isSaved)  
        // setSave(false) 
    }, [])  

    return (
        <>
            {
                saved ? (
                    <BookmarkIcon onClick={unSave}/> 
                ) : (
                    <BookmarkBorderIcon onClick={savePost} />
                )
            }
        </>
    )
}

export default Save