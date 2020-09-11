import { GET_DEPOSIT, GET_DEPOSIT_BY_MEMBER } from "../actions";

const initialState = { allDeposit: [], memberDeposit: [] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DEPOSIT:
            return { ...state, allDeposit: actions.payload };
        case GET_DEPOSIT_BY_MEMBER:
            return { ...state, memberDeposit: actions.payload };
        default:
            return state;
    }
};
