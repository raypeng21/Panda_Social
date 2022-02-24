import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='register' >
        <div className="register_Container">
            <img src="Assets/Panda_Social_logo.png" alt="" />

            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password_again" placeholder='Password Again'/>

            <button className='home_register'>Register a new account</button>

            <Link to = '/signin'>
            <p className='register_back'>Back to Sign in</p>

            </Link>
        </div>

    </div>
  )
}

export default Register