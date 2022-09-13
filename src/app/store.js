import { configureStore } from "@reduxjs/toolkit";

import application from "../features/applicationSlice";
import movies from "../features/movieSlice"
import genres from "../features/genreSclice"

export const store = configureStore({
  reducer: {
    application,
    movies,
    genres


  },
  
});
