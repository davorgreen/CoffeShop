import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../slices/ProductSlice";
import CartSlice from "../slices/CartSlice";
import FavoriteSlice from "../slices/FavoriteSlice";


//save to ls
const saveCartState = (state) => {
    try {
        const pushToLs = JSON.stringify(state);
        localStorage.setItem('cart', pushToLs);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

//get from ls
const loadCartState = () => {
    try {
        const pushToLs = localStorage.getItem('cart');
        if (pushToLs === null) {
            return undefined;
        }
        return JSON.parse(pushToLs);
    } catch (err) {
        return undefined;
    }
};

//
const preloadedState = {
    cartStore: loadCartState()
};

const store = configureStore({
    reducer: {
        productStore: ProductSlice,
        cartStore: CartSlice,
        favoriteStore: FavoriteSlice,
    },
    preloadedState
});


store.subscribe(() => {
    saveCartState(store.getState().cartStore);
});

export default store;
