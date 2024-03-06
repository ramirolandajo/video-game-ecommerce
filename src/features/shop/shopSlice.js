import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            games: [],
            genres: [],
            genreSelected: "",
            gameIdSelected: null,
            gamesFilteredByCategory: [],
        },
    },
    reducers: {
        setGenreSelected: (state, action) => {
            const genreSelected = action.payload;
            const gamesFiltered = [].filter((game)=> game.genres === genreSelected)
            state.value.genreSelected = genreSelected
            state.value.gamesFilteredByCategory = gamesFiltered
        },
        setGameIdSelected: (state, action) => {
            state.value.productIdSelected = action.payload;
        },
    },
});

export const { setGenreSelected, setGameIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
