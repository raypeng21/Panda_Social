import React, { useEffect, useState  } from 'react';
import Pusher from "pusher-js";
import axios from "../../axios"
import SideBar from '../SideBar/SideBar';
import Chat from '../Chat/Chat';
import "./main.scss"
function Main() {

    
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get("/messages/sync")
        .then((response) => {
        setMessages(response.data);
      })
    
  }, []);



  useEffect(() => {
    const pusher = new Pusher('739310b287ee5fb66200', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);


  return (
    <div className='main'>
        <div className="body">
        <SideBar />
        <Chat messages = {messages}/>
        </div>

    </div>
  )
}

export default Main