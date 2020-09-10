import { GET_LOGGED_IN_MEMBER, LOGOUT } from "../actions";

const initialState = { allMember: [], memberByID: {}, loggedInUser: {} };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_LOGGED_IN_MEMBER:
            return { ...state, loggedInUser: actions.payload };
        case LOGOUT:
            return { ...state, loggedInUser: {} };
        default:
            return state;
    }
};
