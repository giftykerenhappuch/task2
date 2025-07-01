import React, { useState } from 'react';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-box">
          <img src="assets\logo.png"  className="logoo" alt='logo' />
          <h2>Welcome back 👋</h2>
          <p>We are happy to have you back</p>
          <label>Email address</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
            />
            <span onClick={togglePassword} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-terms">
            <input type="checkbox" />
            <span>I agree to the terms and conditions</span>
          </div>

          <button className="login-btn">Login</button>

          <div className="login-divider">
            <div className="login-line"></div>
            <span>OR</span>
            <div className="login-line"></div>
          </div>

          <button className="login-google-btn">
            <img src="assets/google.png" alt="Google" />
            Login with Google
          </button>
          <p>Don't have an account? <a href="/" className='aa'>Register</a></p>
        </div>
      </div>

      {/* Right side: Background Image */}
      <div className="login-right-image"></div>
    </div>
  );
}
