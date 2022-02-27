import React from 'react'
import "./sidebarchat.scss"
import { Link } from 'react-router-dom';

function SideBarChat( ) {



  return (
    <div className='sidebarChat' >
            <img className='sidebarChat_img ' src={"/assets/images/person/noAvatar.png"} alt="" />



        <div className="ListUnit_info">
            <h5>Lily</h5>
            <span>Hello Lily, do you ...</span>

        </div>



    </div>
  )
}

export default SideBarChat