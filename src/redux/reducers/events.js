import { GET_EVENT } from "../actions";

const initialState = { allEvent: [], eventById: [] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_EVENT:
            return { ...state, allEvent: actions.payload };
        default:
            return state;
    }
};
