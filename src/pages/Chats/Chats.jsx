import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { axiosPrivate } from "../../Apis/Axios"
import ChatList from "../../components/ChatList/ChatList"
import Navbar from "../../components/navbar/Navbar"
import SingleChat from "../../components/SingleChat/SingleChat"
import useChat from "../../Hooks/useChat"
import MessageSvg from '../../assets/svgs/message.svg';

import '../../style.scss'
import './Chats.scss'
const Chats = () => {
    const [roomId, setRoomId] = useState(null)
    const [newMessage, setNewmessage] = useState('');
    const [chtSelected, setChtselect] = useState(false);
    const [commInfo,setInfo] = useState({
        name: '',
        profile: ''
    });
    const[back,setback] = useState(false);
    useEffect(() => {
        roomId !== null && setChtselect(true);
    }, [roomId]) 

    return (
        <>
            <div className="chatsPage">
                <div className="chatBox">
                    <div className="chatList">
                        <ChatList setRoomId={setRoomId} setInfo={setInfo} />
                    </div>
                    <div className="singleChat">
                        {
                            chtSelected ? (<SingleChat setNewmessage={setNewmessage} roomId={roomId} setRoom={setRoomId} setSelected={setChtselect} info={commInfo}/>) : (
                                <div className="startChat">
                                    <img src={MessageSvg} alt="error" srcset="" />
                                    <h3>Tap to a chat to start conversation</h3>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Chats