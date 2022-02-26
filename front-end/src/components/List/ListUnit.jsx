import React from 'react';
import "./listunit.scss";
import { Link } from 'react-router-dom';

function ListUnit({profilePircture,username, id }) {
  return (
    <div className='ListUnit'>
      <div className="ListUnit_frame">

        <Link to = {"/profile/" + username}>
        <div className="ListUnit_profilePicture">
            <img src={profilePircture || "/assets/images/person/noAvatar.png"} alt="" />
        </div>
        </Link>



        <div className="ListUnit_info">
            <span>{username}</span>
            <span>Id : {id}</span>
        </div>



        <div className="Listunit_operation">
          <button>Profile</button>
          <button>Chat</button>
          <button></button>
        </div>

      </div>  
    </div>

  )
  
}

export default ListUnit