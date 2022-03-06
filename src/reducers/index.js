import counterReducer from "./counter-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterData: counterReducer,
})

export default allReducers;