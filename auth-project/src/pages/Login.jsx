import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '12345') {
      localStorage.setItem('isLoggedIn', 'true');

      navigate('/dashboard');
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login Page</h2>
        <p>Please enter your login details.</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="mt-3 text-muted text-center">
          Demo Username: admin
          <br />
          Demo Password: 12345
        </p>
      </div>
    </div>
  );
}

export default Login;