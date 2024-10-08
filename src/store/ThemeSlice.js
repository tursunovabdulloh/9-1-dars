import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") === "synthwave" ? "synthwave" : "light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    ToggleTheme(state) {
      state.theme = state.theme === "light" ? "synthwave" : "light";
      localStorage.setItem("theme", state.theme);
    },
    SetTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { ToggleTheme, SetTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
