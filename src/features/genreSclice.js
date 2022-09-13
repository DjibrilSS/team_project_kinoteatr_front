import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    genres:[]
}


export const fetchgenre = createAsyncThunk(
    "fetch/genre",
    async (_,thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:4000/genre")
            const data = await res.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const genreSclice = createSlice({
    name: "genre",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchgenre.fulfilled,(state,action)=>{
            state.genres = action.payload
        })
    }
})


export default genreSclice.reducer