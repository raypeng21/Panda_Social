import React,{useRef} from 'react';
import './register.scss';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const histroy = useHistory();



  const handleClick = async (e) => {
    e.preventDefault();

    if(passwordAgain.current.value  !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("/auth/register", user)
        histroy.push("/signin")
      }catch(err){
        console.log(err)
      }
    }

  };


  return (
    <div className='register' >
        <div className="register_Container">
            <img src="Assets/Panda_Social_logo.png" alt="" />


            <form className='register_box' onSubmit={handleClick}>
              <input type="text" required ref = {username} placeholder='Username'/>
              <input type="email" required ref = {email} placeholder='Email'/>
              <input type="password" required ref = {password} minLength ="6" placeholder='Password'/>
              <input type="password" required ref = {passwordAgain} placeholder='Password Again'/>

              <button type = "submit" className='home_register'>Register a new account</button>


            </form>


            <Link to = '/signin'>
            <p className='register_back'>Back to Sign in</p>

            </Link>
        </div>

    </div>
  )
}

export default Register