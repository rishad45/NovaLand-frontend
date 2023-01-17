import { useEffect, useLayoutEffect,useRef} from 'react';
import './singleChat.scss'
import { useState } from 'react'
import { axiosPrivate } from '../../Apis/Axios';
import useChat from '../../Hooks/useChat';
import EmojiPicker from 'emoji-picker-react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const SingleChat = ({ setNewmessage, roomId, setRoom, setSelected, info }) => {
  const chatRef = useRef()
  const naviagate = useNavigate();
  const user = useSelector((state) => state.user);
  const { messages, sendMessage } = useChat(roomId, user);

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);
  }

  const send = (e) => {
    e.preventDefault()
    sendMessage(input, user.username);
    console.log(input);
    axiosPrivate.post('/chats/sendChat', {
      receiver: roomId,
      message: input,
    });
    setInput('');
  }

  const ref = useRef(null);
  const setRef = useCallback((node) => {
    console.log(1);
    if(node){
      console.log("yeyyyyy")
      node.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        });
    }
    ref.current = node
  },[roomId, ref])

  useEffect(() => {
    console.log(chatRef.current);
    chatRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [roomId]);

  // useLayoutEffect(() => {
  //   if(chatRef.current){
  //     chatRef.current.scrollTop = chatRef.current.scrollHeight
  //   }
  // },[chatRef])



  return (
    <div className='singleChatBox'>
      <div className="headerPart-single">
        <div className='frt'>
          <button style={{border:'none', background:'none', cursor:'pointer'}} onClick={() => {
            naviagate('/chats');
            setRoom(null);
            setSelected(false)

          }}>
            <ArrowBackIcon />
          </button>
          <div className="roomProfile" style={{cursor:'pointer'}}>
            <img src={info.profile} alt="" />
          </div>
        </div>
        <span>{info?.name}</span>
      </div>
      <div className="message-single"> 
        {
          messages.map((chats, index) => {
            return (
              <div className={chats.ownedBycurrentUser ? 'chatItemOwn chat' : 'chatItem chat'} key={index}>
                <div className='chatCont'>
                  {
                    chats.ownedBycurrentUser ? (
                      <div className='chatcontin' style={{ marginLeft: '5px' }}><span className='chatter'>You</span><span className='chatterTime' style={{ fontSize: '10px' }}>3m</span></div>
                    ) : (
                      <div style={{ marginLeft: '5px' }}><span className='chatter'>{chats.user?.userName || chats.user?.username || chats?.name }</span><span className='chatterTime' style={{ fontSize: '10px' }}>3m</span></div>
                    )

                  }
                  <span style={{ marginLeft: '5px' }}>{chats.message}</span>
                </div>
              </div>
            )
          })
        }
        <div ref={setRef}></div>
      </div>
      <div className="footer-single">
        <button className='emojiButton'><SentimentSatisfiedAltIcon/></button>
        <input type="text" name="message" className='messageIp' id="" value={input} onChange={handleChange} placeholder='Message.......'/>
        <button className='sendMess' onClick={send}>
          <SendIcon/>
          <span>Send Message</span>
          </button>
      </div>
    </div>
  )
}

export default SingleChat 