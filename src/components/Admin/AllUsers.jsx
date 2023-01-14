import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { axiosPrivate } from '../../Apis/Axios';
import useTable from '../../Hooks/useTable';
import CustomTable from '../ReusableComponents/Table/CustomTable';

const AllUsers = () => {
    const[blocked,setBlocked] = useState(false);
    const onButtonClick = (e, row) => {
        e.stopPropagation();
        //do whatever you want with the row
        axiosPrivate.post('/admin/block-user', {
            userId: row.id,
        }).then((res) => {
            setBlocked(true);
            console.log(res.data.message)
        })
        console.log(row);
    };

    useEffect(() => {
        console.log(blocked);
    },[blocked]);
    let endpoint = '/admin/get-all-users';
    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'userName', headerName: 'USERNAME', width: 250 },
        { field: 'email', headerName: 'EMAIL', width: 250 },
        {
            field: 'Actions', headerName: 'Actions', width: 400, renderCell: (params) => {
                return (
                    <button
                        onClick={(e) => onButtonClick(e, params.row)}
                        variant="contained"
                        style={{padding:'5px', width:'5rem', backgroundColor:'yellow', cursor: 'pointer'}}
                    >
                        Block
                    </button>
                );
            }
        }
    ]
    const{rows} = useTable(endpoint)
    return (
        <>
            <CustomTable rows={rows} columns={columns} width={'100%'} height={600} />
        </>
    )
}

export default AllUsers