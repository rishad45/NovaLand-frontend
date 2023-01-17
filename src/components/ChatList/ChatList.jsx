import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../Apis/Axios'
import SearchIcon from '@mui/icons-material/Search';
import './ChatList.scss'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
const ChatList = ({ setRoomId, setInfo }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [participants, setparticipants] = useState([])
    const getAllchats = () => {
        axiosPrivate.get('/get-user-communities').then((result) => {
            setparticipants(result.data.data);
        })
    }

    const openChat = (id,name,profile) => {
        setInfo({
            name : name,
            profile: profile,
        })
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
                    <img src={user.profileUrl} alt="" />
                </div>
                <p>{user.username}</p>
                <SearchIcon className='searchicon' style={{ marginRight: '7px', color: 'black' }} />
            </div>
            <div className="chatLists">
                {
                    participants.map((item,index) => {
                        return <div className="chatlist-singleCom" key={item._id} id={`flag${index}`} onClick={() => {
                            // toggle(index);
                            openChat(item._id, item.name, item.image)
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