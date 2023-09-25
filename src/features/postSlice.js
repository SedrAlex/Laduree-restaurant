import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const add_post_api = "http://localhost:5000/api/posts/createpost";

export const addPost = createAsyncThunk("add-post/", async (post) => {
  const formData = new FormData();

  // append the image file, content, and title to formData
  formData.append("image", post.image);
  formData.append("content", post.content);
  formData.append("title", post.title);
 console.log(formData);
  const response = await fetch(add_post_api, {
    method: "POST",

    body: formData,   
  });
  const data = await response.json();
  console.log(data)
  return data;
});

const postSlice = createSlice({
  name: "addPost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default postSlice.reducer;
