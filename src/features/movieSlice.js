import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    movies:[]
}


export const fetchmovies = createAsyncThunk(
    "fetch/movies",
    async (_,thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:4000/movies")
            const data = await res.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const moviesSclice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchmovies.fulfilled,(state,action)=>{
            state.movies = action.payload
        })
    }
})


export default moviesSclice.reducer