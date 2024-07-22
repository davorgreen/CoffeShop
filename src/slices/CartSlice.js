import { createSlice } from "@reduxjs/toolkit";


function storeInLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const currentProduct = state.cart.find((product) => product.id === action.payload.id);

            if (currentProduct) {
                const tempCart = state.data.map((product) => {
                    if (product.id === action.payload.id) {
                        let newQty = product.quantity + action.payload.quantity;
                        let newTotalPrice = newQty * product.price;


                        return {
                            ...product,
                            quantity: newQty,
                            totalPrice: newTotalPrice,
                        };
                    } else {
                        return product;
                    }
                })
                state.cart = tempCart;
                storeInLocalStorage(state.cart);
            }
            else {
                state.cart.push(action.payload);
                storeInLocalStorage(state.cart);
            }
        },
        updateQuantity: (state, action) => { },
        removeItem: (state, action) => { },
        getCartTotal: (state, action) => { }
    }
})

export const { addToCart, updateQuantity, removeItem, getCartTotal } = CartSlice.actions;
export default CartSlice.reducer;