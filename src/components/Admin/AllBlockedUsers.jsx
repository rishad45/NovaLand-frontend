import React, { useEffect } from 'react'
import { useState } from 'react';
import { axiosPrivate } from '../../Apis/Axios';
import useTable from '../../Hooks/useTable';
import CustomTable from '../ReusableComponents/Table/CustomTable';

const AllBlockedUsers = () => {
    const[unblocked, setUnblocked] = useState(false);

    const onButtonClick = (e, row) => {
        e.stopPropagation();
        //do whatever you want with the row
        console.log(row);
        axiosPrivate.post('/admin/unblock-user', {
            userId: row.id,
        }).then((res) => {
            setUnblocked(true);
        })
    };
    let endpoint = '/admin/get-all-blockedUsers';
    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'userName', headerName: 'USERNAME', width: 250 },
        { field: 'email', headerName: 'EMAIL', width: 250 },
        {
            field: 'actions', headerName: 'Actions', width: 400, renderCell: (params) => {
                return (
                    <button
                        className='blockButton'
                        onClick={(e) => onButtonClick(e, params.row)}
                        variant="contained"
                        style={{padding:'5px', width:'5rem', backgroundColor:'yellow', cursor: 'pointer'}}
                    >
                        Unblock
                    </button>
                );
            }
        }
    ]
    const { rows } = useTable(endpoint)
    useEffect(() => { console.log('un', unblocked)}, [unblocked, rows])
    return (
        <>
          <CustomTable width={'100%'} height={600} rows={rows} columns={columns}/>
        </>
    )
}

export default AllBlockedUsers