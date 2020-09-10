import { GET_LOGGED_IN_MEMBER, LOGOUT } from "../actions";

const initialState = { allMember: [], memberByID: {}, loggedInMember: {} };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_LOGGED_IN_MEMBER:
            return { ...state, loggedInMember: actions.payload };
        case LOGOUT:
            return { ...state, loggedInMember: {} };
        default:
            return state;
    }
};
