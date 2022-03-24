import counterReducer from "./counter-reducer";
import cartReducer from "./cart-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterData: counterReducer,
    cartData: cartReducer,
})

export default allReducers;