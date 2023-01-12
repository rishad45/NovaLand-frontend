import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import socketIOclient from 'socket.io-client'
import { axiosPrivate } from '../Apis/Axios';

const NEW_CHAT_MESSAGE_EVENT = 'newMessageChat';
const SOCKET_SERVER_URL = 'http://localhost:8000';

const useChat = (roomId,user) => {
    console.log('room',roomId); 
    const [messages, setMessages] = useState([])
    const socketRef = useRef()

    const getAllMessages = (id) => {
        axiosPrivate.post('/chats/getAllChats', {
            receiverId: id,
        }).then((res) => {
            setMessages(res.data.chats);
        }).then((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAllMessages(roomId);
        socketRef.current = socketIOclient(SOCKET_SERVER_URL, {
            query: { roomId },
        });

        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                userName: useChat.userName,
                ownedBycurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, incomingMessage])
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId])

    const sendMessage = (messageBody) => {
        console.log('bd', messageBody);
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            message: messageBody,
            senderId: socketRef.current.id,
        });
    };

    return { messages, sendMessage }
};

export default useChat;