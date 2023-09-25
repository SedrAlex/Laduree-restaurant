import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: true,
};
const get_usersStas_api = "http://localhost:5000/api/users/yearly-plane/2023,2024,2025,2026";

export const getUsersStas = createAsyncThunk("getUsersStats/", () => {
  return fetch(get_usersStas_api).then((resp) => {
    return resp.json();
  });
});

const getUsersStasSlice = createSlice({
  name: "getUsersStats",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsersStas.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersStas.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsersStas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getUsersStasSlice.reducer;
