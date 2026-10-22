const initialState = {
  theme: "dark",
};

export function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    default:
      return state;
  }
}

export { initialState };