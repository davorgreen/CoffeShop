import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
        discount: 0,
        currentCoupon: '',
    },
    reducers: {
        addToCart: (state, action) => {
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
                state.totalPrice = subTotal(copyArray); // Update totalPrice after adding new item
                state.totalProduct++;
            } else {
                copyArray[findIndex].count++;
                copyArray[findIndex].cartTotal = copyArray[findIndex].price * copyArray[findIndex].count;
                state.totalPrice = subTotal(copyArray); // Update totalPrice after existing item
            }

            state.cart = copyArray;
        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;

            let copyArray = [...state.cart];
            copyArray[index].cartTotal += copyArray[index].price * increment;
            copyArray[index].cartTotal = Math.round(copyArray[index].cartTotal * 100) / 100;

            // Update total price
            state.totalPrice = subTotal(copyArray);

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
        },
        setCartClear: (state) => {
            state.cart = [],
                state.totalPrice = 0,
                state.totalProduct = 0;
        },
        applyCoupon: (state, action) => {
            const currentCoupon = action.payload;
            if (currentCoupon === 'green') {
                state.currentCoupon = currentCoupon;
                state.discount = (state.totalPrice * 0.10).toFixed(2);

            } else {
                state.discount = 0;
                state.coupon = '';
            }
        }
    }
})


function subTotal(arr) {
    const total = arr.reduce((acc, curr) => {
        return acc + curr.cartTotal;
    }, 0);

    return Math.round(total * 100) / 100;
}

export const { addToCart, setPriceHandler, removeProductHandler, setCartClear, applyCoupon } = CartSlice.actions;
export default CartSlice.reducer;
