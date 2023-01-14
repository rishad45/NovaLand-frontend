import React, { useEffect, useState } from 'react'
import { axiosPrivate } from '../../Apis/Axios';
import useTable from '../../Hooks/useTable';
import CustomTable from '../ReusableComponents/Table/CustomTable';

const TableView = ({url, block}) => {
    const onButtonClick = (e, row) => {
        e.stopPropagation();
        //do whatever you want with the row
        axiosPrivate.post('/admin/block-admin', {
            adminId: row.id,
        }).then((res) => {
            console.log(res.data.message)
        })
        console.log(row);
    };

    useEffect(() => {

    },[url]);
    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'USERNAME', width: 250 },
        { field: 'email', headerName: 'EMAIL', width: 250 },
        {field: 'superAdmin', headerName: 'SUPER_ADMIN', width:150},
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
    const{rows} = useTable(url)
  return (
    <>
            <CustomTable rows={rows} columns={columns} width={'100%'} height={600} />
    </>
  )
}

export default TableView