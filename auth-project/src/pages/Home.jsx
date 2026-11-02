import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to My Website</h1>

        <p>
          This is a simple React authentication application.
          Please login to access your dashboard.
        </p>

        <Link to="/login" className="btn btn-primary">
          Login Now
        </Link>
      </div>
    </div>
  );
}

export default Home;