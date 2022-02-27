import React, { useEffect, useContext, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import SideBarChat from '../SidebarChat/SideBarChat';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import VideocamIcon from '@material-ui/icons/Videocam';
import axios from 'axios';
import "./chat.scss"
import { AuthContext } from '../../context/AuthContext';
import {format} from "timeago.js";
import { useRef } from 'react';


function Chat() {
    
    const {user} = useContext(AuthContext)

    const[conversations,setconversations] = useState([])
    const[currentChat,setcurrentChat] = useState(null)
    const[messages,setmessages] = useState([])
    const[input,setInput] = useState("")

    const scrollRef = useRef();
    
    useEffect(() => {
        const getConversations = async () =>{
            try {
                const res = await axios.get("conversations/" + user?._id)
                setconversations(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getConversations();


    }, [user._id])
    


    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id)
                setmessages(res.data)
            } catch (err) {
                console.log(err)
            }
        };

        getMessages();
    },[currentChat])


    useEffect(() => {
      scrollRef.current?.scrollIntoView({behavior: "smooth"})
    

    }, [messages])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: input,
            conversationId : currentChat._id,
        };

        try {
            const res = await axios.post("/messages", message)
            setmessages([...messages, res.data])
            setInput("")
        } catch (err) {
            console.log(err)
        }
    };

  return (
    <div className='chat'>

        <div className="chat_left">
            <div className="chat_left_search">
                <input placeholder = "Search or start new chat" type="text" />
                <IconButton>                
                     <AddBoxIcon /> 
                </IconButton>
            </div>

            {conversations.map((c) => (
                <div onClick={() => setcurrentChat(c)}>
                <SideBarChat conversations = {c} currentUser = {user} />
                </div>
            ))}


        </div>
        

        <div className="chat_right">
        {currentChat ? (
        <>
                <div className="chat_header">
                    <div className="chat_header_info">
                        <img src={"/assets/images/person/noAvatar.png"} alt="" />
                        <h3> Chat</h3>
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
                    <div 
                    ref ={scrollRef} 
                    className={`chat_message ${message.sender ===user._id && 'chat_receiver'}`}>
                        <span className='chat_name'>{message.sender}</span>
                            {message.text}
                    
                        <span className='chat_time'>
                            {format(message.createdAt)}
                        </span>
                    </div>
                ))}
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
                        placeholder = "Please Enter your message here"
                        type="text" />

                        <button onClick={handleSubmit} type= "submit">
                            Send
                        </button>
                    </form>



                </div></>) : (<span className='OpentoStart'>Open a conversation to start chat.</span>)}


        </div>



    </div>
  )
}

export default Chat