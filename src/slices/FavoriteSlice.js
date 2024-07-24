import { createSlice } from "@reduxjs/toolkit";




const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteItems: [],
        favoriteTotal: 0,
    },
    reducers: {
        addToFavorite: (state, action) => {
            let copyArray = [...state.favoriteItems];
            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) {
                copyArray.push(action.payload);
                state.favoriteTotal++;
            } else {
                copyArray.splice(findIndex, 1);
                state.favoriteTotal--;
            }


            state.favoriteItems = copyArray;

        },
        removeFavorite: (state, action) => {
            const { id } = action.payload;
            state.favoriteItems = state.favoriteItems.filter(item => item.id !== id);
            state.favoriteTotal--;
        }

    },
}

);

export const { addToFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;