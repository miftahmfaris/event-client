import { combineReducers } from "redux";
import members from "./members";
import deposits from "./deposits";

export default combineReducers({
    deposits,
    members,
});
