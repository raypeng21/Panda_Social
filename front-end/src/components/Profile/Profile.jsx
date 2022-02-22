import { Avatar } from '@material-ui/core'
import React from 'react'
import Post from '../Post/Post'
import SideBar from '../SideBar/SideBar'
import "./profile.scss"

function Profile() {
  return (
    <div className='profile'>
      <div className="body">
      <SideBar />
      <div className="profileContainer">
        <div className="profile_top">
          <Avatar />
          <div className="profile_top_info">
          <h3>Name: Lily</h3>
          <h4>User Id: lilyllalala</h4>
          <h4>Email: Lily@gmail.com</h4>
          </div>

        </div>

        <div className="profile_bottom">
          <Post/>

        </div>

      </div>

      </div>

      

    </div>
  )
}

export default Profile