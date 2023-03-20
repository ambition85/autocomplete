import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        searchLimit: 10,
        weighResults: true,
    },
    reducers: {
        changeSearchLimit: (state, action) => {
            state.searchLimit = action.payload;
        },
        changeWeighResults: (state, action) => {
            state.weighResults = action.payload;
        },
    },
});

export const { changeSearchLimit, changeWeighResults } = settingsSlice.actions;

export const selectSearchLimit = (state) => state.settings.searchLimit;
export const selectWeighResults = (state) => state.settings.weighResults;

export default settingsSlice.reducer;
