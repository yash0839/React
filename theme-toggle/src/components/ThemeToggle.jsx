
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>

      <div className="theme-card">

        <h1>
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </h1>

        <p>
          Welcome to my React application!
        </p>

        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
        </button>

      </div>

    </div>
  );
}

export default ThemeToggle;
