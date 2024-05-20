
import { bookingReducer } from "./booking";
import { combineReducers } from "redux";
import { isUserLogin } from "./isUserLogin";

export const allReducer = combineReducers({
    bookingReducer,
    isUserLogin,
    //Them cac reducer khac vao day
});