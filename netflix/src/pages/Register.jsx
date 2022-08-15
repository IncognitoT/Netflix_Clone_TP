import React from 'react'
import "../styles/Register.scss"
import { Link } from 'react-router-dom';
import { useState } from "react";

import { postRegsiter } from "../service/regsiterService";

const Register = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [login, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const value = {email, password, login, firstName, lastName}
          await postRegsiter(value)
        } catch (error) {
          console.log(error);
        }
      };
  

  return (
        <div className="register">
        <div className="top">
        <div className="wrapper">
            <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
        </div>
        </div>
        <div className="container">
        <form onSubmit={handleSubmit}>
        
            <h1>Register</h1>
            <input placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
            <input placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
            <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)} />
            <input type="username" placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button className="loginButton">Sign Up</button>
            
            <span>
             Already have a Netflix Account? {' '}
              <Link to='/'>
              Log In
              </Link>
            </span>
           
        </form>
        </div>
    </div>
  )
}

export default Register