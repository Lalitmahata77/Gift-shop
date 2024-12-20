import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    themeInfo : localStorage.getItem("themeInfo") ? JSON.parse(localStorage.getItem("themeInfo")) : "coffee"
}
const themSlice = createSlice({
name : "theme",
initialState,
reducers:{
    setTheme : (state,action)=>{
        state.themeInfo = action.payload;
        localStorage.setItem("themeInfo",JSON.stringify(action.payload))
    }
}
})

export const {setTheme} = themSlice.actions
export default themSlice.reducer