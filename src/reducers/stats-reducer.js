import { createSlice } from "@reduxjs/toolkit";

export const statsSlice = createSlice({
    name: "stats",
    initialState: {
        searchTime: "0 ms",
        numResults: 0,
    },
    reducers: {
        changeSearchTime: (state, action) => {
            state.searchTime = action.payload;
        },
        changeNumResults: (state, action) => {
            state.numResults = action.payload;
        },
    },
});

export const { changeSearchTime, changeNumResults } = statsSlice.actions;

export const selectSearchTime = (state) => state.stats.searchTime;
export const selectNumResults = (state) => state.stats.numResults;

export default statsSlice.reducer;
