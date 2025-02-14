import React, { useState } from 'react'
import './chat.css'

const Chat = ({ data }) => {
    // console.log(data);
    const [activeChat, setActiveChat] = useState(true);

    return (
        <div className='chat'>
            {/* <div className={activeChat ? "messages" : "messages messages-full-height"}>
                <h1>Messages</h1>
                <div className="message" onClick={() =>  {setActiveChat(true);} }>
                    <img src="./favicon.png" alt="" />
                    <span className='chat-user-name'>Joe</span>
                    <span>Lorem, ipsum dolor.</span>
                </div>
            </div> */}
            <div className={activeChat ? "active-chat" : "inactive-chat"}>
                <div className="chat-top">
                    <img src={data.avatar} alt="" />
                    <p className='chat-user-name'>{data.postedBy}</p>
                    <span onClick={() => { setActiveChat(false) }}>X</span>
                </div>
                <div className="chat-centre">
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own-msg">
                        <p>Lorem, ipsum dolor.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="chat-bottom">
                    <input type="text" placeholder="Type a message..." />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat