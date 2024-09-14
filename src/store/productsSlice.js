import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSLice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.push({ ...action.payload });
    },
  },
});

export const { add } = productsSLice.actions;
export default productsSLice.reducer;
