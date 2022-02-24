import React from 'react'
import Feed from '../Feed/Feed'
import SideBar from '../SideBar/SideBar'
import "./profile.scss"
import { useState, useEffect} from "react";
import axios from "axios";
import Share from '../Share/Share';
import {useParams} from "react-router";


function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
 
  
  useEffect(() => {
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
    }
     
    fetchUser();

}, [username])


  return (
    <div className='profile'>
      <div className="body">
      <SideBar />
      <div className="profileContainer">

        <div className="profile_Name_Card">
          {/* <img 
          className='profileCoverImg'
          src={user.coverPicture || "/assets/images/person/noCover.png"} 
          alt="" /> */}
            <img
                  className="profileProfileImg"
                  src={user.profilePicture || "/assets/images/person/noAvatar.png"}
                  alt=""
                />

              <div className="profile_info">
                <h2>{user.username}</h2>
                <h4>{user.desc}</h4>

              </div>
              <div className="profile_banner">
                <div className="profile_share">
                  <Share />
                </div>

                <div className="profile_top_info">
                  <h2>User Information:</h2>
                  <h3>City: {user.city}</h3>
                  <h3>From: {user.from}</h3>
                  <h3>Relationship: {user.relationship}</h3>
                </div>
              </div>


        </div>

        <div className="profile_bottom">
          
          <Feed username={username}/>

        </div>

      </div>

      </div>

      

    </div>
  )
}

export default Profile