import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import cartReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});

export default store;
