import React, { useEffect, useState } from 'react'
import "./sidebarchat.scss"
import axios from 'axios';

function SideBarChat({conversations, currentUser} ) {

    const [user, setUser] = useState(null)

    useEffect(() => {
      const friendId = conversations.members.find((m)=>  m !== currentUser._id);

      const getUser = async () => {
        try {
          const res = await axios("/users?userId=" + friendId)
          setUser(res.data);
        } catch (err) {
          console.log(err)
        }
      }

      getUser();
    }, [currentUser, conversations])


  return (
    <div className='sidebarChat' >
            <img className='sidebarChat_img' src={user?.profilePicture} alt="" />



        <div className="ListUnit_info">
            <h5>{user?.username}</h5>
            <span>Hello Lily, do you ...</span>

        </div>



    </div>
  )
}

export default SideBarChat