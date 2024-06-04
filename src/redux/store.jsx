import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
