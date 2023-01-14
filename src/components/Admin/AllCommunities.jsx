import React from 'react'
import useTable from '../../Hooks/useTable'
import CustomTable from '../ReusableComponents/Table/CustomTable'

const AllCommunities = () => {
    const {rows} = useTable('/admin/get-all-communities')
    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'NAME', width: 150 },
        {
            field: 'totalPosts',
            headerName: 'TOTAL POSTS',
            type: 'number',
            width: 150,
        },
        {
            field: 'users',
            headerName: 'TOTAL USERS',
            type: 'number',
            width: 150,
        },
    ]
  return (
        <div className='allCommunities'>
           <CustomTable rows={rows} columns={columns} width={'100%'} height={600}/> 
        </div>
    )
}

export default AllCommunities