import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://u5d7qofvcc.execute-api.eu-north-1.amazonaws.com/dev/signup", // ✅ Your Lambda endpoint
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error("Error creating account:", error);

      if (error.response) {
        alert(error.response.data.message || "Failed to create account");
      } else {
        alert("Network error or server not reachable.");
      }
    }
  };

  return (
    <div className="backdrop">
      <button className="close-btn">×</button>
      <div className="container">
        <img src="/assets/logo.png" className="logo" alt="logo" />
        <h2>Create an account</h2>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="a"><strong>Log in</strong></Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="social-login">
            <button type="button" className="facebook-btn">
              <img src="/assets/facebook.png" className="icon" alt="fb" />
              Continue with Facebook
            </button>
            <button type="button" className="google-btn">
              <img src="/assets/google.png" className="icon" alt="google" />
              Continue with Google
            </button>
          </div>

          <div className="divider"><span>or</span></div>

          <h6>Enter your email address and password to create an account</h6>

          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Create a password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">Create an account</button>
        </form>
      </div>
    </div>
  );
}
