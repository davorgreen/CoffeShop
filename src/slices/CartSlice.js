import { createSlice } from "@reduxjs/toolkit";


/*function storeInLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}*/

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            let copyArray = [...state.cart];


            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })
            if (findIndex === null) {
                copyArray.push({ ...action.payload, count: 1, cartTotal: action.payload.price });
                state.totalPrice += action.payload.price;
                state.totalProduct++;
            } else {
                copyArray[findIndex].count++;
            }

            state.cart = copyArray;
        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;

            let copyArray = [...state.cart];
            copyArray[index].cartTotal += copyArray[index].price * increment;

            //total price
            state.totalPrice = subTotal(copyArray)

            if (copyArray[index].count === 1 && increment === -1) {
                copyArray.splice(index, 1);
                state.totalProduct--;
            } else {
                copyArray[index].count += increment;
            }
            state.cart = copyArray;
        },
        removeProductHandler: (state, action) => {
            const { index } = action.payload;
            let copyArray = [...state.cart];
            copyArray.splice(index, 1);
            state.totalProduct--;
            state.totalPrice = subTotal(copyArray);

            state.cart = copyArray;
        }
    }
})
function subTotal(arr) {
    const total = arr.reduce((acc, curr) => {
        return acc + curr.cartTotal;
    }, 0);
    return total.toFixed(2);
}


export const { addToCart, setPriceHandler, removeProductHandler } = CartSlice.actions;
export default CartSlice.reducer;