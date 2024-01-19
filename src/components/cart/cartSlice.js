import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  ordered: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      state.ordered = false;
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const targetItem = state.cart.find((item) => item.id === action.payload);
      targetItem.quantity++;
      targetItem.price = targetItem.quantity * targetItem.price;
    },
    decreaseQuantity(state, action) {
      const targetItem = state.cart.find((item) => item.id === action.payload);
      if (targetItem.quantity <= 1)
        cartSlice.caseReducers.deleteFromCart(state, action);
      targetItem.quantity--;
      targetItem.price = targetItem.quantity * targetItem.price;
    },
    clearCart(state, action) {
      state.cart = [];
    },
    orderItems(state, action) {
      cartSlice.caseReducers.clearCart(state, action);
      state.ordered = true;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  orderItems,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const isProductAdded = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.price, 0);

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const isItemsOrdered = (state) => state.cart.ordered;
