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

const SingleChat = ({ setNewmessage, roomId, setRoom, setSelected }) => {
  const chatRef = useRef()
  const naviagate = useNavigate();

  const { messages, sendMessage } = useChat(roomId);

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);
  }

  const send = (e) => {
    e.preventDefault()
    sendMessage(input);
    console.log(input);
    axiosPrivate.post('/chats/sendChat', {
      receiver: roomId,
      message: input,
    });
    setInput('');
  }

  useEffect(() => {

    // return() => {
    //   setBack(false);
    // }
  }, [roomId]);

  useLayoutEffect(() => {
    if(chatRef.current){
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  },[chatRef])


  return (
    <div className='singleChatBox' ref={chatRef}>
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
            <img src="https://i.pinimg.com/564x/0c/36/b0/0c36b040c95c6d6773423f56c8a87822.jpg" alt="" />
          </div>
        </div>
        <span>Commm name</span>
      </div>
      <div className="message-single" > 
        {
          messages.map((chats) => {
            return (
              <div className={chats.ownedBycurrentUser ? 'chatItemOwn chat' : 'chatItem chat'}>
                <div className='chatCont'>
                  {
                    chats.ownedBycurrentUser ? (
                      <div className='chatcontin' style={{ marginLeft: '5px' }}><span className='chatter'>You</span><span className='chatterTime' style={{ fontSize: '10px' }}>3m</span></div>
                    ) : (
                      <div style={{ marginLeft: '5px' }}><span className='chatter'>{chats.user?.userName || chats.user?.username }</span><span className='chatterTime' style={{ fontSize: '10px' }}>3m</span></div>
                    )

                  }
                  <span style={{ marginLeft: '5px' }}>{chats.message}</span>
                </div>
              </div>
            )
          })
        }
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