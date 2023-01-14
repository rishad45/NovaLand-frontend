import React from 'react'
import { useState } from 'react'
import { axiosPrivate } from '../../Apis/Axios';
import Tab from '../ReusableComponents/Tabs/Tab'
import ReportedPosts from './ReportedPosts';
import TopPosts from './TopPosts';
const AllPosts = () => {
    const URL1 = '/admin/get-top-posts';
    const URL2 = 'admin/get-all-reportedPosts';
    const COLUMNS1 = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'userId', headerName: 'USERID', width: 250 },
        { field: 'communityId', headerName: 'COMMUNITY ID', width: 250 },
        {
            field: 'totalLikes',
            headerName: 'TOTAL LIKES',
            type: 'number',
            width: 150,
        },
        {
            field: 'comments',
            headerName: 'TOTAL COMMENTS',
            type: 'number',
            width: 150,
        },
    ]

    const onButtonClick = (e, row) => {
        e.stopPropagation();
        //do whatever you want with the row
        axiosPrivate.post('/admin/delete-post', {
            postId: row.id,
        }).then((res) => {
            console.log(res.data.message)
        })
        console.log(row);
    };
    const COLUMNS2 = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'userId', headerName: 'USERID', width: 150 },
        { field: 'communityId', headerName: 'COMMUNITY ID', width: 150 },
        { field: 'reason', headerName: 'REPORT REASON', width: 150 },
        {
            field: 'count',
            headerName: 'REPORT COUNT',
            type: 'number',
            width: 150,
        },
        {
            field: 'Actions', headerName: 'Actions', width: 400, renderCell: (params) => {
                return (
                    <button
                        onClick={(e) => onButtonClick(e, params.row)}
                        variant="contained"
                        style={{padding:'5px', width:'6rem', backgroundColor:'yellow', cursor: 'pointer'}}
                    >
                        DELETE POST
                    </button>
                );
            }
        }
    ]

    const[tab,setTab] = useState('all');
  return (
    <div className='allPosts'>
        <Tab name1={'TOP 10 POSTS'} name2={'REPORTED POSTS'} tab={tab} setTab={setTab} />
        <div className="postsContainer">
            {
                tab === 'all' ? (<TopPosts url={URL1} columns={COLUMNS1}/>) : (<ReportedPosts url={URL2} columns={COLUMNS2}/>)
            }
        </div>
    </div>
  )
}

export default AllPosts