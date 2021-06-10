import { createStore, combineReducers } from "redux";

import  { busReducers } from "./reducers/busBookingReducers";


const combinedReducer = combineReducers({
  

    busReducers: busReducers
    
})

export const store = createStore(combinedReducer)
