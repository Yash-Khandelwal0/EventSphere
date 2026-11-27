import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        name : "SC"
    },
    reducers : {
        toggleFavorites(state) {

        },
        removeFavorites(state) {

        },
        clearFavorites(state) {

        },
    }
})

export const { toggleFavorites, removeFavorites, clearFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer