import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='register' >
        <div className="register_Container">
            <img src="https://logos-download.com/wp-content/uploads/2017/01/WeChat_logo_icon.png" alt="" />

            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            
            <button className='home_register'>Register a new account</button>

            <Link to = '/'>
            <p className='register_back'>Back to Sign in</p>

            </Link>
        </div>

    </div>
  )
}

export default Register