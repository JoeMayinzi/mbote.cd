import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import postsSlice from "./slices/postsSlice";
import mediaSlice from "./slices/mediaSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    medias: mediaSlice,
  },
});
