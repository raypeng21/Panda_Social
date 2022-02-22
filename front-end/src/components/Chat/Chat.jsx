import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import SideBarChat from '../SidebarChat/SideBarChat';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import VideocamIcon from '@material-ui/icons/Videocam';
import axios from '../../axios';
import "./chat.scss"

function Chat({messages}) {


    const[input,setInput] = useState("")

    const sendMessage = async(e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "Demo",
            timestamp: "Just now",
            received: true,
        });

        setInput("");

    }


  return (
    <div className='chat'>

        <div className="chat_left">
            <div className="chat_left_search">
                <input placeholder = "Search or start new chat" type="text" />
                <IconButton>                
                     <AddBoxIcon /> 
                </IconButton>
            </div>
            <SideBarChat />
            <SideBarChat />
            <SideBarChat />

        </div>

        <div className="chat_right">

        <div className="chat_header">
            <div className="chat_header_info">
                <h3> Name</h3>
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

            {messages.map((message) => (
            <div className={`chat_message ${message.received && 'chat_receiver'}`}>
            <span className='chat_name'>{message.name}</span>
            {message.message}
            
            <span className='chat_time'>
                {message.timestamp}
            </span>
        </div>))}
        </div>

        <div className="chat_foot">
            <div className="chat_foot_top">
                <div className="chat_foot_top_left">
                <InsertEmoticonIcon />
                <InsertDriveFileIcon />
                <FilterCenterFocusIcon />
                </div>

                <div className="chat_foot_top_right">
                <LocalPhoneIcon />
                <VideocamIcon />

                </div>




            </div>

            <form className='chat_foot_textbox'>
            <textarea
                value= {input}
                onChange = {(e) => setInput(e.target.value)}

                type="text" />

                <button onClick={sendMessage} type = "submit">
                    Send
                </button>
            </form>



        </div>


        </div>



    </div>
  )
}

export default Chat