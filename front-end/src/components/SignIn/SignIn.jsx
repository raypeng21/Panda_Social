import React ,{useContext, useRef}from 'react';
import './signin.scss';
import { Link } from 'react-router-dom';
import{signinCall} from "../../apiCalls.js";
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';


function SignIn() {

  const email = useRef();
  const password = useRef();
  const {isFetching, dispatch} = useContext(AuthContext);

  const handleClick =(e) => {
    e.preventDefault();
    signinCall({email: email.current.value, password:password.current.value}, dispatch)

  };

  return (
    <div className='signin' >
        <div className="signin_Container">
            <img src="Assets/Panda_Social_logo.png" alt="" />


            <form className='signin_box' onSubmit={handleClick}>

              <input type="email" required placeholder='Email' ref= {email} />
              <input 
              type="password" 
              required 
              minLength={6}
              placeholder='Password' 
              ref= {password}/>

              

              <button className='home_singnin' 
              type = "submit" 
              disabled = {isFetching}
              >{ isFetching ? <CircularProgress color='green' size="20px"/> : "Sign In" }</button>

              <Link to = "./register">
              <button className='home_register' disabled = {isFetching}>{ isFetching ? <CircularProgress color='green' size="20px"/> : "Register a new account" }</button>

              </Link>

            </form>


        </div>

    </div>
  )
}

export default SignIn