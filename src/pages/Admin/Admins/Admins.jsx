import React from 'react'
import { useState } from 'react';
import AllBlockedAdmins from '../../../components/Admin/AllBlockedAdmins';
import TableView from '../../../components/Admin/TableView';
import Tab from '../../../components/ReusableComponents/Tabs/Tab';
import useTable from '../../../Hooks/useTable'

const Admins = () => {
  const urlAll = '/admin/get-all-admins';
  const urlBlock = '/admin/get-all-blockedAdmins';
  const [tab, setTab] = useState('all');

  return (
    <div className='allAdmins'>
      <Tab name1={'ADMINS'} name2={'BLOCKED ADMINS'} setTab={setTab} tab={tab} />
      <div className="adminTable">
        {
          tab === 'all' ? (
            <TableView url={urlAll} />
          ) : (
            <AllBlockedAdmins/>
          )
        }
      </div>
    </div>
  )
}

export default Admins