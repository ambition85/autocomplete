import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        limitResults: false,
        searchLimit: 100,
        weighResults: true,
    },
    reducers: {
        changeSearchLimit: (state, action) => {
            state.searchLimit = action.payload;
        },
        changeWeighResults: (state, action) => {
            state.weighResults = action.payload;
        },
        changeLimitResults: (state, action) => {
            state.limitResults = action.payload;
        },
    },
});

export const { changeSearchLimit, changeWeighResults, changeLimitResults } = settingsSlice.actions;

export const selectSearchLimit = (state) => state.settings.searchLimit;
export const selectWeighResults = (state) => state.settings.weighResults;
export const selectLimitResults = (state) => state.settings.limitResults;

export default settingsSlice.reducer;
