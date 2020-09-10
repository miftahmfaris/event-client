import { GET_DEPOSIT } from "../actions";

const initialState = { allDeposit: [] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DEPOSIT:
            return { ...state, allDeposit: actions.payload };
        default:
            return state;
    }
};
