import { useEffect } from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { axiosPrivate } from "../../Apis/Axios"
import { setTab } from '../../Redux/Slices/tabSlice'
import useNotification from "../../Hooks/useNotification";
import { MoreHorizOutlined } from "@mui/icons-material";
import './notifications.scss'
const Notifications = () => {
    const { sendNotification } = useNotification()
    const [notifications, setNotifications] = useState([]);
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
    }, [])
    return (
        <div className="notifications">
            {
                notifications.map((item) => {
                    return <div className="singleNotification">
                        <div className="notiLeft">
                            <div className="notiImage">
                                <img src="https://i.pinimg.com/564x/71/36/cd/7136cd07d8b7d3a13cc63a079205e122.jpg" alt="" />
                            </div>
                        </div>
                        <div className="notiCentre">
                            <p className="notifyText">{item.message}</p>
                        </div>
                        <div className="notiRight">
                            <button>
                                <MoreHorizOutlined />
                            </button>
                        </div>
                    </div>
                })
            }
            
        </div>
    )
}

export default Notifications