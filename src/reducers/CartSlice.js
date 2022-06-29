import { createSlice } from "@reduxjs/toolkit";
import { data } from "../products";

const initialState = {
  inCart: []
};

export const cartSlice = createSlice({
  name: "inCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.inCart, "in");
      let newItem = data.find((item) => item.id === action.payload);
      newItem = { ...newItem, count: 1 };
      console.log(newItem, "newitem");

      if (!state.inCart.some((el) => el.id === newItem.id)) {
        state.inCart.unshift(newItem);
      } else {
        let newArr = state.inCart.map((el) =>
          el.id === newItem.id ? { ...el, count: el.count + 1 } : el
        );
        state.inCart = newArr;
      }
    },
    removeFromCart: (state, action) => {
      let newArr = state.inCart.filter((el) => el.id !== action.payload.id);
      state.inCart = newArr;
    },
    increment: (state, action) => {
      let newArr = state.inCart.map((el) =>
        el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
      );
      state.inCart = newArr;
    },
    decrement: (state, action) => {
      let newArr = state.inCart.map((el) =>
        el.id === action.payload.id ? { ...el, count: el.count - 1 } : el
      );
      state.inCart = newArr;
    }
  }
});

export const selectCart = (state) => state.cartState.inCart;
export const {
  addToCart,
  removeFromCart,
  increment,
  decrement
} = cartSlice.actions;
export default cartSlice.reducer;
