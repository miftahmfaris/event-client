import { combineReducers } from "redux";
import members from "./members";
import deposits from "./deposits";
import events from "./events";

export default combineReducers({
    deposits,
    events,
    members,
});
