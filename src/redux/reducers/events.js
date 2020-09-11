import { GET_EVENT, GET_EVENT_BY_ID } from "../actions";

const initialState = { allEvent: [], eventById: {} };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_EVENT:
            return { ...state, allEvent: actions.payload };
        case GET_EVENT_BY_ID:
            return { ...state, eventById: actions.payload };
        default:
            return state;
    }
};
