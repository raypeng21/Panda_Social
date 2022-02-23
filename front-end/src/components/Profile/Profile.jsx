import { Avatar } from '@material-ui/core'
import React from 'react'
import Feed from '../Feed/Feed'
import Post from '../Post/Post'
import SideBar from '../SideBar/SideBar'
import "./profile.scss"
import { useState, useEffect} from "react";
import axios from "axios";


function Profile() {
  const [user, setUser] = useState({});

 
  
  useEffect(() => {
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=Lala`);
        setUser(res.data);
    }
     
    fetchUser();

}, [])


  return (
    <div className='profile'>
      <div className="body">
      <SideBar />
      <div className="profileContainer">
        <div className="profile_top">
          <Avatar />
          <div className="profile_top_info">
          <h3>{user.username}</h3>
          <h4>{user.userId}</h4>
          <h4>{user.email}</h4>
          </div>

        </div>

        <div className="profile_bottom">
          {/* <Post/> */}
          <Feed/>

        </div>

      </div>

      </div>

      

    </div>
  )
}

export default Profile