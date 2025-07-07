import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Create this for custom styling
import Swal from 'sweetalert2';

export default function DashboardPage() {
  const handleLogout = () => {
    Swal.fire({
      icon: 'info',
      title: 'Logged out',
      text: 'You have been logged out.',
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      // You can clear user data from localStorage/session if needed
      window.location.href = '/';
    });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="/assets/logo.png" alt="Logo" className="dashboard-logo" />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <main className="dashboard-main">
        <h2>Welcome back 👋</h2>
        <p>Here's a quick summary of your account:</p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>My Orders</h3>
            <p>You have 3 recent orders.</p>
            <Link to="/orders" className="card-link">View Orders →</Link>
          </div>

          <div className="card">
            <h3>Wishlist</h3>
            <p>5 items in your wishlist.</p>
            <Link to="/wishlist" className="card-link">Go to Wishlist →</Link>
          </div>

          <div className="card">
            <h3>Account Settings</h3>
            <p>Update your profile and password.</p>
            <Link to="/settings" className="card-link">Edit Profile →</Link>
          </div>
        </div>

        <Link to="/" className="shop-btn">Go to Shop</Link>
      </main>
    </div>
  );
}
