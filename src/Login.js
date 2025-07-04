import React, { useState } from 'react';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://4hk5tuje01.execute-api.eu-north-1.amazonaws.com/test/loginhandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); 
      } else {
        alert(data.message); // "Invalid credentials"
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-box">
          <img src="assets/logo.png" className="logoo" alt="logo" />
          <h2>Welcome back 👋</h2>
          <p>We are happy to have you back</p>

          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={togglePassword} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-terms">
            <input type="checkbox" />
            <span>I agree to the terms and conditions</span>
          </div>

          <button className="login-btn" onClick={handleLogin}>Login</button>

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

      <div className="login-right-image"></div>
    </div>
  );
}
