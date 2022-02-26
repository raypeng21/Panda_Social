import React, { useContext, useState, useEffect} from 'react'
import Feed from '../Feed/Feed'
import SideBar from '../SideBar/SideBar'
import "./profile.scss"
import axios from "axios";
import {useParams} from "react-router";
import { AuthContext } from '../../context/AuthContext';
import {Add, Remove} from "@material-ui/icons"

function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const {user: currentUser, dispatch} = useContext(AuthContext);

  const [followed, setFollowed] = useState(!currentUser?.following.includes(user?.id));

  
  useEffect(() => {
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
    }
     
    fetchUser();

}, [username])



const handleFollow = async () =>{
  try {
    if(followed){
      await axios.put("/users/" + user._id + "/unfollow", { userId :currentUser._id});
      dispatch({type:"UNFOLLOW", package: user._id})
    }else{
      await axios.put("/users/" + user._id + "/follow",{  userId :currentUser._id})
      dispatch({type:"FOLLOW",  package: user._id})

    }
  } catch (err) {
    console.log(err)
  }

  setFollowed(!followed);
}

  return (
    <div className='profile'>
      <div className="body">
      <SideBar />
      <div className="profileContainer">

        <div className="profile_Name_Card">

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


                <div className="profile_top_info">
                  <h2>User Information:</h2>
                  <h3>City: {user.city}</h3>
                  <h3>From: {user.from}</h3>
                  <h3>Relationship: {user.relationship}</h3>
                </div>

                <div className="profile_top_operation">
                  {user.username !== currentUser?.username && (           //if current user? hide the
                      <button className='profile_top_operation_follow' onClick={handleFollow}>
                       {followed ? "Unfollow" : "Follow"}
                       {followed ? <Remove /> :  <Add/> }
                      </button>

                  )}

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