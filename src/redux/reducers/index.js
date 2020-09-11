import { combineReducers } from "redux";
import members from "./members";
import deposits from "./deposits";
import events from "./events";
import orders from "./orders";

export default combineReducers({
    deposits,
    events,
    members,
    orders,
});
