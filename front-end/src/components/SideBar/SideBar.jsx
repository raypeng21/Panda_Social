import React from 'react'
import "./sidebar.scss"
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MenuIcon from '@material-ui/icons/Menu';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Avatar, IconButton } from '@material-ui/core';
import SideBarChat from '../SidebarChat/SideBarChat';
import AddBoxIcon from '@material-ui/icons/AddBox';


function SideBar() {
  return (
    <div className='siderbar'>
        <div className="sider_left">
            <div className="sider_left_top">
            <Avatar variant="square" src = "https://www.cheatsheet.com/wp-content/uploads/2019/01/Aubrey-Anderson-Emmons-net-worth-2018-photo-GettyImages-1067034090.jpg"/>
            </div>

            <div className="sider_left_bottom">

            <IconButton>
                <ChatBubbleIcon />
            </IconButton>

            <IconButton>
                <PeopleAltIcon />
            </IconButton>

            <IconButton>
                <AllInboxIcon />
            </IconButton>
            </div>

            <div className="sider_left_foot">

            <IconButton>
                <MenuIcon />
            </IconButton>

            </div>


        </div>



        <div className="sider_right">
            <div className="sider_right_search">
                <input placeholder = "Search or start new chat" type="text" />
                <IconButton>                
                     <AddBoxIcon /> 
                </IconButton>
            </div>
            <SideBarChat />
            <SideBarChat />
            <SideBarChat />

        </div>

        
        
        
        
        
        </div>
  )
}

export default SideBar