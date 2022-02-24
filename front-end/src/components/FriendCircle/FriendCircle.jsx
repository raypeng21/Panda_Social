import React from 'react'
import Feed from '../Feed/Feed'
import SideBar from '../SideBar/SideBar'
import "./friendcircle.scss"


function FriendCircle() {


  return (
    <div className='friendCircle'>
      <div className="body">
      <SideBar />
      <div className="friendRight">
        <Feed />

      </div>
      </div>

    </div>
  )
}

export default FriendCircle