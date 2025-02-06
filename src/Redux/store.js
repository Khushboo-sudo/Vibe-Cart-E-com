import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Redux/Feature/productSlice'
import cartReducer from '../Redux/Feature/cartSlice'

 export const store = configureStore({
    reducer:{

     product: productReducer,
     cart: cartReducer,
    }
})