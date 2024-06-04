import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action (using createAsyncThunk)
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const username = "Groukam_admin";
  const password = "P_EY=]@Z#=Tquy&VX6cy.a^28T;P^3P=";

  const base64EncodedCredentials = btoa(`${username}:${password}`);
  const authHeader = `Basic ${base64EncodedCredentials}`;

  const response = await axios.get(
    "https://backend.mbote.cd/wp-json/wp/v2/posts",
    {
      headers: { Authorization: authHeader },
    }
  );
  return response.data;
});

const postsSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    posts: null,
    isError: false,
  },
  reducers: {}, // No reducers needed in this case (using extraReducers)
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default postsSlice.reducer;
