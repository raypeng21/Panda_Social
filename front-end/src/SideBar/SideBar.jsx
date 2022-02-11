import React from 'react'
import "./sidebar.scss"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SideBarChat from '../SidebarChat/SideBarChat';

function SideBar() {
  return (
    <div className='siderbar'>
        <div className="sider_header">
            <div className="sider_header_left">
            <Avatar src = "https://www.cheatsheet.com/wp-content/uploads/2019/01/Aubrey-Anderson-Emmons-net-worth-2018-photo-GettyImages-1067034090.jpg"/>
            </div>

            <div className="sider_header_right">

            <IconButton>
                <DonutLargeIcon />
            </IconButton>

            <IconButton>
                <ChatIcon />
            </IconButton>

            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
        </div>

        <div className="sider_search">
            <SearchOutlined />
            <input placeholder = "Search or start new chat" type="text" />

        </div>

        <div className="sider_chat">
            <SideBarChat />
            <SideBarChat />
            <SideBarChat />

        </div>

        
        
        
        
        
        </div>
  )
}

export default SideBar