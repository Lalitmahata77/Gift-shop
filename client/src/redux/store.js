import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./features/userSlice"
import themeReducer from "./features/themeSlice"
import favoriteReducer from "./features/favoritesSlice"
import cartSliceReducer from "../redux/features/cartSlice"
import shopReducer from "./features/shopSlice"
const store = configureStore({
    reducer :{
[apiSlice.reducerPath] : apiSlice.reducer,
auth : userReducer,
theme : themeReducer,
favorites : favoriteReducer,
cart : cartSliceReducer,
shop : shopReducer

    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
setupListeners(store.dispatch)

export default store