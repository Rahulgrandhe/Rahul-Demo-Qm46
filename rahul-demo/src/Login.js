import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginPage.css"

function Login() {
  return (
    <div className="container">
      <div className="image">
        <img src="https://media.licdn.com/dms/image/D560BAQEN4T5sRseISA/company-logo_200_200/0/1704871484912?e=1723680000&v=beta&t=fAEd72H-KplngeolO-vjC0Wnoh1Ru4Ce26uwI28Pn7A" alt="Placeholder Image" />
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

