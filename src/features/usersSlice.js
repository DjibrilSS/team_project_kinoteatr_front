import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    load:false
}


export const fetchUser = createAsyncThunk(
    "fetch/user",
    async (_,thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:4000/users/user", {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${thunkAPI.getState().application.token}`,
                  "Content-Type": "application/json",
                },
              });
            const data = await res.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

 


const userSclice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.users = action.payload
            state.load= false
        })
        .addCase(fetchUser.pending,(state,action)=>{
            
            state.load= true
        })
        

       
    }
})


export default userSclice.reducer