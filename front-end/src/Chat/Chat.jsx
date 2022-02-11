import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import "./chat.scss"
function Chat() {

  return (
    <div className='chat'>
        <div className="chat_header">
            <Avatar />

            <div className="chat_header_info">
                <h3>Room Name</h3>
                <p>Last seen by ...</p>
            </div>

            <div className="chat_header_right">
                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <IconButton>
                    <AttachFile />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className="chat_body">

            <div className='chat_message'>
                <span className='chat_name'>Ray</span>
                This is a message
                
                <span className='chat_time'>
                    {new Date().toUTCString()}
                </span>
            </div>

            <div className='chat_message chat_receiver'>
                <span className='chat_name'>Ray</span>
                This is a message
                
                <span className='chat_time'>
                    {new Date().toUTCString()}
                </span>
            </div>            
            
            <div className='chat_message'>
                <span className='chat_name'>Ray</span>
                This is a message
                
                <span className='chat_time'>
                    {new Date().toUTCString()}
                </span>
            </div>            
            
            <div className='chat_message chat_receiver'>
                <span className='chat_name'>Ray</span>
                This is a message
                
                <span className='chat_time'>
                    {new Date().toUTCString()}
                </span>
            </div>






        </div>

        <div className="chat_foot">
            <InsertEmoticonIcon />
            <form>
                <input
                // value= {input}
                // onChange = {(e) => setInput(e.target.value)}
                placeholder = "Type your message"
                type="text" />

                <button>
                    Send
                </button>

            </form>

            <MicIcon />
        </div>
    </div>
  )
}

export default Chat