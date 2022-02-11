import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarchat.scss"

function SideBarChat() {
  return (
    <div className='sidebarChat' >
        <Avatar />
        <div className="sidebarChat_info">
            <h3>Name</h3>
            <h4>Chathistroy</h4>

        </div>



    </div>
  )
}

export default SideBarChat