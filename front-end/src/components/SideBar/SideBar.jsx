import React, { useContext } from 'react'
import "./sidebar.scss"
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MenuIcon from '@material-ui/icons/Menu';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Avatar, IconButton } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import {signoutCall} from "../../apiCalls.js";


function SideBar() {

    const {user,dispatch} = useContext(AuthContext)
    const histroy = useHistory();


    const signout = (e) => {
        e.preventDefault();
        signoutCall(dispatch)

    }

    const handleCircle = (e) => {
        e.preventDefault();
        histroy.push("/")
    }

    const handleFriends = (e) => {
        e.preventDefault();
        histroy.push("/friendlist")
    }

    const handleChat = (e) => {
        e.preventDefault();
        histroy.push("/chat")
    }



  return (
    <div className='siderbar'>
        <div className="sider_left">
            <div className="sider_left_top">
            <Link to = {`/profile/${user?.username}`}>
                <Avatar variant="square" src = {user.profilePicture || "/assets/images/person/noAvatar.png"}/>

            </Link>
            </div>

            <div className="sider_left_bottom">

            <IconButton onClick={handleCircle}>
                <AllInboxIcon />
            </IconButton>

            <IconButton onClick={handleFriends}>
                <PeopleAltIcon />
            </IconButton>


            <IconButton onClick={handleChat}>
                <ChatBubbleIcon />
            </IconButton>

            </div>

            <div className="sider_left_foot">

            <IconButton onClick={signout}>
                <MenuIcon /> Log Out
            </IconButton>

            </div>


        </div>





        
        
        
        
        
        </div>
  )
}

export default SideBar