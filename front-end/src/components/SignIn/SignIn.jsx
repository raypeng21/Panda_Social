import React from 'react';
import './signin.scss';
import { Link } from 'react-router-dom';


function SignIn() {
  return (
    <div className='signin' >
        <div className="signin_Container">
            <img src="https://logos-download.com/wp-content/uploads/2017/01/WeChat_logo_icon.png" alt="" />

            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>

            
            <button className='home_singnin'>Sign In</button>

            <Link to = "./register">
            <button className='home_register'>Register a new account</button>

            </Link>

        </div>

    </div>
  )
}

export default SignIn