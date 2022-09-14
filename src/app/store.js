import { configureStore } from "@reduxjs/toolkit";

import application from "../features/applicationSlice";
import movies from "../features/movieSlice"
import genres from "../features/genreSclice"
import users from "../features/usersSlice"

export const store = configureStore({
  reducer: {
    application,
    movies,
    genres,
    users
  },
  
});
