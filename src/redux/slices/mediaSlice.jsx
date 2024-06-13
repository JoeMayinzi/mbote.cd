import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

export const fetchMedia = createAsyncThunk("media/fetchMedia", async () => {
  try {
    const response = await axios.get(
      "https://backend.mbote.cd/wp-json/wp/v2/media"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error; // Rethrow the error for handling in your code
  }
});

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    isLoading: false,
    media: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMedia.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMedia.fulfilled, (state, action) => {
      state.media = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchMedia.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error; // Access error message
    });
  },
});

export default mediaSlice.reducer;
