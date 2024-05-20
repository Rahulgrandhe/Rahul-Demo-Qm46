import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Logo from './Assests/Company.jpg' ;

function Login() {
  return (
    <div className="container">
    <div className="image">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="form">
      <h2 className='loginh2'>Login page</h2>
      <form action="#" method="post">
        <label htmlFor="username" className="label">User ID</label>
        <input type="text" id="username" name="username" placeholder="Username" required />
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" required />
        <Link to="/LandingPage"><input type="submit" value="Login" /></Link>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  </div>
  );
}

export default Login;