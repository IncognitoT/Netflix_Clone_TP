import React from 'react'
import "../styles/Login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
        <div className="login">
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
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <Link to='/home'>
            <button className="loginButton">Sign In</button>
            </Link>
            <span>
            New to Netflix? {' '}
            <Link to='/'>Sign Up</Link>
            </span>
           
        </form>
        </div>
    </div>
  )
}

export default Login