import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './SignIn';    // or wherever your SignIn component is
import LoginPage from './Login';  // Login.js file
import DashboardPage from './Dashboard'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
