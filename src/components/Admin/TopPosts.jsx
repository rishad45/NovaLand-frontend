import React from 'react'
import { useEffect } from 'react'
import useTable from '../../Hooks/useTable'
import CustomTable from '../ReusableComponents/Table/CustomTable'

const TopPosts = ({url, columns}) => {
    useEffect(() => {

    }, [url])
    const{rows} = useTable(url);
  return (
    <>
    <CustomTable rows={rows} columns={columns} width={'100%'} height={600}/>
    </>
  )
}

export default TopPosts