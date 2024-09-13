
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";

// store kay sections ko compbine krke aik bara reducer bnadeta
let baraReducer = combineReducers({
    productSlice:productSlice.reducer,
    userSlice:userSlice.reducer
});

// configureStore aapko store banakar dega

export let meraStore =  configureStore({
    reducer:baraReducer
});