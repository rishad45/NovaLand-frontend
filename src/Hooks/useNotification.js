import { useEffect, useState } from "react"
import { axiosPrivate } from "../Apis/Axios"

const useNotification = () => {
    const sendNotification = (userId,message) => {
        axiosPrivate.post('/send-notification',{
            userId,
            message,
        }) 
    }
    return {sendNotification} 
}

export default useNotification