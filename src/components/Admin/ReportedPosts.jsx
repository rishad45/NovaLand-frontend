import React from 'react'
import { useState } from 'react'
import useTable from '../../Hooks/useTable'
import CustomTable from '../ReusableComponents/Table/CustomTable';

const ReportedPosts = ({ url, columns }) => {
    const { rows } = useTable(url);
    return (
        <>
            <CustomTable rows={rows} columns={columns} width={'100%'} height={600} />
        </>
    )
}

export default ReportedPosts