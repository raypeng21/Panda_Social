import React, { useEffect, useContext, useState } from 'react'
import {format} from "timeago.js";
import { AuthContext } from '../../context/AuthContext';
import "./message.scss";
import axios from 'axios';


function Message({message}) {

const {user} = useContext(AuthContext)



  return (
    <div className="message">
        <div 
        className={`chat_message ${message.sender ===user._id && 'chat_receiver'}`}>
            <span className='chat_name'></span>
                {message.text}
        
            <span className='chat_time'>
                {format(message.createdAt)}
            </span>
        </div>
    </div>

  )
}

export default Message