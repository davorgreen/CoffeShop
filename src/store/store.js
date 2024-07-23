import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../slices/ProductSlice";
import CartSlice from "../slices/CartSlice";
import FavoriteSlice from "../slices/FavoriteSlice";




const store = configureStore({
    reducer: {
        productStore: ProductSlice,
        cartStore: CartSlice,
        favoriteStore: FavoriteSlice,
    }
})

export default store;