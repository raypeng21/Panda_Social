import React, { useContext, useEffect, useState } from 'react'
import ListUnit from '../List/ListUnit'
import SideBar from '../SideBar/SideBar'
import "./friendlist.scss";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

function FriendList() {
  const {user} = useContext(AuthContext);
  const [friends, setFriends] = useState([])


  useEffect(() => {       //cannot use async directly into the useEffect
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id)
        setFriends(friendList.data);
      } catch (err) {
        console.log(err)
      }
    }

    getFriends();

  }, [user])

  return (
    <div className='friendList'>
      <div className="body">
      <SideBar />
      <div className="friendRight">
        {friends.map(friend => (
          <ListUnit 
          profilePircture = {friend.profilePicture}
          username = {friend.username}
          id = {friend._id}
          />
        ))}
      </div>
      </div>

    </div>
  )
}

export default FriendList