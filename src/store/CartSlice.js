import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      const item = action.payload;
      const isHave = state.Cart.find((Product) => Product.id === item.id);

      if (isHave) {
        isHave.quantity += 1;
      } else {
        state.Cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.Cart));
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const isHave = state.Cart.find((Product) => Product.id === id);

      if (isHave) {
        if (isHave.quantity > 1) {
          isHave.quantity -= 1;
        } else {
          state.Cart = state.Cart.filter((Product) => Product.id !== id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.Cart));
    },
  },
});

export const { AddToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
