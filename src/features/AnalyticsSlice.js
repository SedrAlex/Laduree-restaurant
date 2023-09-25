import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
};
console.log()

const get_analytics_api = "http://localhost:5000/api/boutique/orders/most-requested";

export const getAnalytics = createAsyncThunk("getAnalytics/", () => {
  return fetch(get_analytics_api)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const analyticsSlice = createSlice({
  name: "analitics",
  initialState,
  extraReducers: {
    // Show Analitics
    [getAnalytics.pending]: (state) => {
      state.loading = true;
    },
    [getAnalytics.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAnalytics.rejected]: (state, action) => {
      state.loading = false;
      console.log(action);
    },
  },
});

export default analyticsSlice.reducer;
