import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux"
import { axiosPrivate } from "../../../Apis/Axios";
import './admHome.scss'
const AdminHome = () => {
    const admin = useSelector((state) => state.admin);
    const [data,setData] = useState({
      users: null,
      posts: null,
      communities: null,
    })
    const getData = () => {
      axiosPrivate.post('/admin/get-data-forHome').then((res) => {
        setData({
          users: res.data.users,
          posts: res.data.posts,
          communities: res.data.communities
        })
      })
    }

    useEffect(() => {
      getData();
    }, [])
  return (
    <div className="adminHome">
        <h1>Welcome Home {admin.name}</h1>
        <div className="numbers">
          <div className="totalUsers numdiv">
            <p>Total users are : {data.users}</p>
          </div>
          <div className="totalPosts numdiv">
            <p>Total posts : {data.posts} </p>
          </div>
          <div className="totalCommunities numdiv">
            <p>Total communitites : {data.communities}</p>
          </div>
        </div>
    </div>
  )
}

export default AdminHome