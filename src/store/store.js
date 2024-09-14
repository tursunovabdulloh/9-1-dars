import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import themeReducer from "./ThemeSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    theme: themeReducer,
  },
});

export default store;
