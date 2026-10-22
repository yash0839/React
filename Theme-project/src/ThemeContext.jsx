
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  theme: "dark",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "dark" ? "light" : "dark",
      };

    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
