import './users.scss'
import CustomTable from '../../../components/ReusableComponents/Table/CustomTable'
import useTable from '../../../Hooks/useTable'
import Tab from '../../../components/ReusableComponents/Tabs/Tab'
import { useState } from 'react'
import { useEffect } from 'react'
import AllUsers from '../../../components/Admin/AllUsers'
import AllBlockedUsers from '../../../components/Admin/AllBlockedUsers'
const Users = () => {

  const [tab, setTab] = useState('all');

  useEffect(() => {
    console.log(tab);
  }, [tab]);
  
  return (
    <div className='allUsers'>
      <Tab name1={'ALL USERS'} name2={'BLOCKED USERS'} setTab={setTab} tab={tab} />
      <div className="userTable">
        {
          tab === 'all' ? (
            <AllUsers />
          ) : (
            <AllBlockedUsers />
          )
        }
      </div>
    </div>
  )
}

export default Users