import { createSlice } from "@reduxjs/toolkit";




const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
    },
    reducers: {
        getProductHandler: (state, action) => {
            state.allProducts = action.payload;
        }
    }

})

export const { getProductHandler } = ProductSlice.actions;
export default ProductSlice.reducer;