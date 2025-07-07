import React, { useState } from 'react';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please enter both email and password.',
        didOpen: () => {
    const btn = Swal.getConfirmButton();
    btn.style.backgroundColor = '#ff5722';
    btn.style.color = '#fff';
    btn.style.borderRadius = '15px';
  }
      });
      return;
    }
 setLoading(true); 
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
        Swal.fire({
          icon: 'success',
          title: data.message || 'Login successful!',
          showConfirmButton: false,
          timer: 1500,
          
        })
        .then(() => {
  navigate("/DashboardPage"); // ✅ Redirect after alert closes
});
        // You can redirect here if needed
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.message || 'Invalid credentials',
          didOpen: () => {
    const btn = Swal.getConfirmButton();
    btn.style.backgroundColor = '#ff5722';
    btn.style.color = '#fff';
    btn.style.borderRadius = '15px';
  }
        });
      }
    } catch (err) {
      console.error('Login error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Something went wrong. Try again later.',
      });
    }finally {
      setLoading(false); // Hide loader
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
            <input type="checkbox" required/>
            <span>I agree to the terms and conditions</span>
          </div>
          <button type="submit" className="login-btn" disabled={loading} onClick={handleLogin}>
            {loading ? "Checking..." : "Login"}
          </button>
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
