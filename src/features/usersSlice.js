import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: "",
  favorite: [],
};

export const fetchUser = createAsyncThunk("fetch/user", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/users/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const addToFavorite = createAsyncThunk(
//   "addFavorite/user",
//   async ({ movieId }, thunkAPI) => {
//     console.log(movieId);
//     try {
//       const res = await fetch(`http://localhost:4000/users/addFav/${movieId}`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${thunkAPI.getState().application.token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const moviesSclice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    });
  },
});

export default moviesSclice.reducer;
