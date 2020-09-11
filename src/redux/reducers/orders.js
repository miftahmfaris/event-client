import { GET_ORDER, GET_ORDER_BY_MEMBER } from "../actions";

const initialState = { allOrder: [], memberOrder: [] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ORDER:
            return { ...state, allOrder: actions.payload };
        case GET_ORDER_BY_MEMBER:
            return { ...state, memberOrder: actions.payload };
        default:
            return state;
    }
};
