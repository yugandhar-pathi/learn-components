import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name : "userdetails",
    initialState : {
        username : ""
    },
     
    reducers:{
        setName: (state, action) =>{
             state.username = action.payload
        }
    }
})

export const {setName} = LoginSlice.actions;
export default LoginSlice.reducer;

