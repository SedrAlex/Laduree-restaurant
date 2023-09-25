import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
};

const get_totals_api = "http://localhost:5000/api/boutique/orders/total";


export const getTotals = createAsyncThunk("totals/", () => {
  return fetch(get_totals_api)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});


const totalSlice = createSlice({
  name: "totals",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTotals.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTotals.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTotals.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export default totalSlice.reducer;
