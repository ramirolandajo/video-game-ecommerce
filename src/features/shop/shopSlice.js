import { createSlice } from "@reduxjs/toolkit";
import {useGetGames, useGetGenres} from "../../services/shopService";

const {data: allGames} = useGetGames()
const {data: allGenres} = useGetGenres()
export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            games: allGames,
            genres: allGenres,
            genreSelected: "",
            gameIdSelected: null,
            gamesFilteredByCategory: [],
        },
    },
    reducers: {
        setGenreSelected: (state, action) => {
            const genreSelected = action.payload;
            const gamesFiltered = allGames.filter((game)=> game.genres === genreSelected)
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
