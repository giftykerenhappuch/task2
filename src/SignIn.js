import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length <= 6) {
      Swal.fire({
        icon: 'warning',
        title: 'Weak Password',
        text: 'Password must be at least 6 characters long.',
        didOpen: () => {
    const btn = Swal.getConfirmButton();
    btn.style.backgroundColor = '#ff5722';
    btn.style.color = '#fff';
    btn.style.borderRadius = '15px';
  }
      });
      return;
    }

    setLoading(true); // Show loader

    try {
      const response = await axios.post(
        "https://u5d7qofvcc.execute-api.eu-north-1.amazonaws.com/dev/signup",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
  icon: 'success',
  title: response.data.message || 'Account created successfully!',
  showConfirmButton: false,
  timer: 1500,
}).then(() => {
  navigate("/DashboardPage"); // ✅ Redirect after alert closes
});

    } catch (error) {
      console.error("Error creating account:", error);

      if (error.response?.status === 409) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'This email is already registered. Try logging in.',
        });
      } else if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message || "Failed to create account",
          didOpen: () => {
    const btn = Swal.getConfirmButton();
    btn.style.backgroundColor = '#ff5722';
    btn.style.color = '#fff';
    btn.style.borderRadius = '15px';
  }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Server not reachable. Please try again later.',
        });
      }
    } finally {
      setLoading(false); // Hide loader
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

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Creating..." : "Create an account"}
          </button>
        </form>
      </div>
    </div>
  );
}
