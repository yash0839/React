import React, { useState } from 'react';

function LoginStatus() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-icon">
          <i className="ri-user-3-line"></i>
        </div>

        <h2>Login Status</h2>

        {isLoggedIn && (
          <div className="login-message">
            <i className="ri-checkbox-circle-fill"></i>
            <h4>You are logged in!</h4>
            <p>Welcome back! You are successfully logged in.</p>
          </div>
        )}

        {!isLoggedIn && (
          <div className="logout-message">
            <i className="ri-error-warning-line"></i>
            <h4>You are logged out!</h4>
            <p>Please login to continue.</p>
          </div>
        )}

        <button
          className={`login-btn ${isLoggedIn ? "logout-btn" : "signin-btn"}`}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
          <i className="ri-arrow-right-line"></i>
        </button>

      </div>

    </div>
  );
}

export default LoginStatus;