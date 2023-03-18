import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        searchLimit: 10,
    },
    reducers: {
        changeSearchLimit: (state, action) => {
            state.searchLimit = action.payload;
        },
    },
});

export const { changeSearchLimit } = settingsSlice.actions;

export const selectSearchLimit = (state) => state.settings.searchLimit;

export default settingsSlice.reducer;
