import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../Apis/Axios'
import SearchIcon from '@mui/icons-material/Search';
import './ChatList.scss'
import { useRef } from 'react';
const ChatList = ({ setRoomId }) => {
    const navigate = useNavigate();
    const [participants, setparticipants] = useState([])
    const getAllchats = () => {
        axiosPrivate.get('/get-user-communities').then((result) => {
            setparticipants(result.data.data);
        })
    }

    const openChat = (id) => {
        setRoomId(id);
        navigate(`/chats?id=${id}`);
    }

    const toggle = (id) => {
        document.getElementById(`flag${id}`).classList.add('currentTab') 
    }

    useEffect(() => {
        getAllchats();
    }, []) 
    return (
        <div className='chatListComponent'>
            <div className="chatListSearch">
                <div className='userImage'>
                    <img src="https://i.pinimg.com/564x/e4/19/81/e41981c05ba123bd23911143126ed67f.jpg" alt="" />
                </div>
                <p>who_is_rishad</p>
                <SearchIcon className='searchicon' style={{ marginRight: '7px', color: 'black' }} />
            </div>
            <div className="chatLists">
                {
                    participants.map((item,index) => {
                        return <div className="chatlist-singleCom" key={item._id} id={`flag${index}`} onClick={() => {
                            // toggle(index);
                            openChat(item._id)
                        }}>
                            <img src={item.image} alt="" width={'50px'} height={'50px'} />
                            <span>{item.name}</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ChatList