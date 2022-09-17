import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import {store} from "../app/store" 
const initialState = {
  movies: [],
  moviesFilter: [],
  load: false,
  comments: [],
};

export const fetchComments = createAsyncThunk(
  "fetch/comments",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/commit");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "post/comment",
  async ({ comment, id, user }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/commit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment, movie: id, user }),
      });
      const data = await res.json();
      console.log(data, "=====");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchmovies = createAsyncThunk(
  "fetch/movies",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/movies");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const buymovies = createAsyncThunk(
  "buy/movies",
  async ({ userid, movieId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/users/buy/${userid}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movieId }),
      });
      const data = await res.json();
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);




const moviesSclice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    filterMovies: (state, action) => {
      state.moviesFilter = state.movies.filter((item) => {});
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchmovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.load = false;
        if (state.moviesFilter.length < 1) {
          state.moviesFilter = action.payload;
        }
      })
      .addCase(fetchmovies.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.load = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload)
        state.load = false;
      })
      .addCase(buymovies.fulfilled, (state, action) => {
        state.movies.map((item) => {
          if (item._id === action.payload.movie._id) {
            item.buyUsers.push(action.payload.user);
          }
        });
      })
      
  },
});
export const { filterMovies } = moviesSclice.actions;

export default moviesSclice.reducer;
