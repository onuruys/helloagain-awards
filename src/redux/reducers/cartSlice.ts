import type { Award } from "@interfaces/IAward";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface CartItem extends Award {
  quantity: number;
}
interface CartState {
  data: CartItem[];
}
const initialState: CartState = {
  data: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Award>) => {
      const existingItem = state.data.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (item) => item.id.toString() !== action.payload.toString()
      );
    },
    updateCartItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.data.find(
        (item) => item.id.toString() === action.payload.id.toString()
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});
export const { addToCart, removeFromCart, updateCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice;
