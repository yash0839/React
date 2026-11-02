import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome to Dashboard</h1>

        <p>You have successfully logged in!</p>

        <div className="dashboard-info">
          <h4>User Information</h4>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Status:</strong> Logged In</p>
        </div>

        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;