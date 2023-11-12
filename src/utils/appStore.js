import { configureStore } from "@reduxjs/toolkit";
import cartReducerr from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducerr,
  },
});

export default appStore;
