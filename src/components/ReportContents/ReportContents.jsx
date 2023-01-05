import { CircularProgress } from '@mui/material'
import { height } from '@mui/system'
import { useState, useEffect } from 'react'
import { axiosPrivate } from '../../Apis/Axios'
import Spinner from '../ReusableComponents/Spinner/Spinner'
import './report.scss'
const ReportContents = ({ id, handleClose = false, ispost = false }) => {
    const [reasons, setReasons] = useState([])
    const [loading, setLoading] = useState(true)

    const reportComment = (content) => {
        axiosPrivate.post('/report-this-comment', {
            reason: content,
            commentId: id
        }).then(res => {
            console.log(res.data)
            handleClose()
        }).catch(err => {
            handleClose()
        })
    }

    const reportPost = (content) => {
        console.log(content) 
        console.log(id) 
        axiosPrivate.post('/report-this-post', {
            reason : content,
            postId : id 
        }).then(res => {
            console.log(res.data.message)  
            handleClose() 
        })
    }

    const getReports = () => {
        // setLoading(true)
        axiosPrivate.get('/report-contents').then(res => {
            console.log("contents", res.data)
            setReasons(res.data.contents)
            setLoading(false)
        })
        // setLoading(false)
    }

    useEffect(() => {
        getReports()
    }, [])

    return (
        <div className='report-reasons'>
            {
                loading ? <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </div> : null
            }
            {
                reasons.map((i) => {
                    return ( 
                        <div className='singleReason' key={i._id} onClick={() =>{ispost ? reportPost(i.content) : reportComment(i.content)} }>{i.content}</div>
                    )
                })
            }
        </div>
    )
}

export default ReportContents  