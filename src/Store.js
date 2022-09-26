import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from '../src/LoginSlice'
export default configureStore({
    reducer: {
        userdetails :LoginReducer
    },
})  