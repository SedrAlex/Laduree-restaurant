// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const make_order_paid_api = "";
// const make_order_ingredient_paid_api = "";

// const initialState = {
//   data: [],
//   loading: false,
// };

// const makeOrderPaid = createAsyncThunk("/makeOrderPaid", (id) => {
//   return fetch(make_order_paid_api, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify(id),
//   }).then((resp) => resp.json());
// });

// const makeOrderIngrePaid = createAsyncThunk("/makeOrderIngPaid", (id) => {
//   return fetch(make_order_ingredient_paid_api, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify(id),
//   }).then((resp) => resp.json());
// });

// const orderStatusSlice = createSlice({
//   name: "orderStatusSlic",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(makeOrderPaid.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(makeOrderPaid.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(makeOrderPaid.rejected, (state, action) => {
//         state.loading = false;
//       })
//       .addCase(makeOrderIngrePaid.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(makeOrderIngrePaid.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(makeOrderIngrePaid.rejected, (state, action) => {
//         state.loading = false;
//       });
//   },
// });

// export default orderStatusSlice.reducer();
