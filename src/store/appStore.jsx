import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import authenticateReducer from "./authenticateSlice"
// this is what we export from cartSlice.jsx " export default cartSlice.reducer " and we name that as cartReducer
const appStore = configureStore({
    reducer:{
        cart:cartReducer, 
        authenticate:authenticateReducer,
    }
})
export default appStore