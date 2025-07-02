import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function SignIn() {
  return (
    <div className="backdrop">
      <button className="close-btn">×</button> 
      <div className="container">
        <img src="/assets/logo.png" className="logo" alt="logo" />
        <h2>Create an account</h2>
        <p>Already have an account? <Link to="/login" className="a"><strong>Log in</strong></Link></p>
        <form>
          <div className="social-login">
            <button type="button" className="facebook-btn">
              <img src="/assets/facebook.png" className="icon" alt="fb" />Continue with Facebook
            </button>
            <button type="button" className="google-btn">
              <img src="/assets/google.png" className="icon" alt="google" />Continue with Google
            </button>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <h6>Enter your email address to create an account</h6>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required />
          </div>
          <button type="submit" className="btn">Create an account</button>
        </form>
      </div>
    </div>
  );
}
