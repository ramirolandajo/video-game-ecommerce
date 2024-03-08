import {createSlice} from "@reduxjs/toolkit";
import allGames from '../../data/games.json'
import allGenres from '../../data/genres.json'

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            games: allGames,
            genres: allGenres,
            genreSelected: "",
            gameIdSelected: null,
            gameSelected: null,
            gamesFilteredByGenre: [],
        },
    },
    reducers: {
        setGenreSelected: (state, action) => {
            const genreSelected = action.payload;
            const gamesFiltered = allGames.filter((game)=> game.genres === genreSelected)
            state.value.genreSelected = genreSelected
            state.value.gamesFilteredByGenre = gamesFiltered
        },
        setGameIdSelected: (state, action) => {
            state.value.gameIdSelected = action.payload;
            state.value.gameSelected = allGames.find((item) => item.id === action.payload)
        },
    },
});

export const { setGenreSelected, setGameIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
