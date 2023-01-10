import { useEffect } from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { axiosPrivate } from "../../Apis/Axios"
import {setTab} from '../../Redux/Slices/tabSlice'
const Notifications = () => {
    const[notifications, setNotifications] = useState([]);
    const dispatch = useDispatch()
    const getAllnotifications = () => {
        axiosPrivate.post('/get-user-notifications')
        .then((res) => {
            setNotifications(res.data.notifications) 
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        dispatch(setTab(2)) 
        getAllnotifications();
    },[])
  return (
    <div>
        <h1>All Notifications</h1>
        <div>
            {
                notifications.map((item) => {
                    return <div>
                        <p>{item.message}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Notifications