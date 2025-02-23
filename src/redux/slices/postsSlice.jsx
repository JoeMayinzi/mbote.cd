import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//const API_URL = process.env.MBOTE_API_URL;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(
      "https://backend.mbote.cd/wp-json/wp/v2/posts"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error; // Rethrow the error for handling in your code
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error; // Access error message
    });
  },
});

export default postsSlice.reducer;
