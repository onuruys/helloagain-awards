import bountySlice from "@reducers/bountySlice";
import cartSlice from "@reducers/cartSlice";
import { counterSlice } from "@reducers/counterSlice";
import modalSlice from "@reducers/modalSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    bounties: bountySlice.reducer,
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
