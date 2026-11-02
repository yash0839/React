import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <Link to="/" className="navbar-brand">
          MyWebsite
        </Link>

        <div className="d-flex gap-4">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>

          <Link to="/login" className="text-white text-decoration-none">
            Login
          </Link>

          <Link to="/dashboard" className="text-white text-decoration-none">
            Dashboard
          </Link>
        </div>
      </nav>

      
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;