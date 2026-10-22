import { useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <h1>My React Project</h1>

      <h2>
        Current Theme: {theme}
      </h2>

      <button onClick={toggleTheme}>
        {theme === "dark" ? " Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
