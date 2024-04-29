import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cartSlice";
// import CartReducer from "./slices";

export const store = configureStore({

    reducer:{
        cart: CartSlice.reducer,
    },
});