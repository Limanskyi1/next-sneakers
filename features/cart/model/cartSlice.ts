import { ISneakers } from "@/entities/sneakers";
import { getTotalPrice } from "@/shared/utils/getTotalPrice";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  isOpen: boolean;
  items: ISneakers[];
  totalPrice: number;
}

const cartItems = JSON.parse(localStorage.getItem("cart")!) || [];

const initialState: CartState = {
  isOpen: false,
  items: cartItems,
  totalPrice: getTotalPrice(cartItems),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addToCart: (state, action: PayloadAction<ISneakers>) => {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = getTotalPrice(state.items);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter(({ id }) => id !== itemId);
      state.totalPrice = getTotalPrice(state.items);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    resetCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { openCart, closeCart, addToCart, deleteFromCart, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
