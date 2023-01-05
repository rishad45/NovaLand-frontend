import ChatList from "../../components/ChatList/ChatList"
import Navbar from "../../components/navbar/Navbar"
import SingleChat from "../../components/SingleChat/SingleChat"
import '../../style.scss'
import './Chats.scss'
const Chats = () => {
    return (
        <>
            <div className="chatsPage">
                <div className="chatBox">
                    <div className="chatList">
                        <ChatList />
                    </div>
                    <div className="singleChat">
                        <SingleChat />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Chats