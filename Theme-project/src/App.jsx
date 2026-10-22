
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function App() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div className={`app ${state.theme}`}>
      <h1>My Theme Project</h1>

      <h2>
        Current Theme: {state.theme}
      </h2>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        {state.theme === "dark"
          ? "☀️ Switch to Light Mode"
          : "🌙 Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
