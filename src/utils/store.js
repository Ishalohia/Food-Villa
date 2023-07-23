import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//The store will contain slices which we need to update 
const store = configureStore({
    reducer: {
        cart: cartSlice,
    }, 
})

export default store;