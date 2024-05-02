
import { bookingReducer } from "./booking";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
    bookingReducer,
    //Them cac reducer khac vao day
});