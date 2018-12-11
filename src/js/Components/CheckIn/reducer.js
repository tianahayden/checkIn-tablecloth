const defaultState = {
    clientId:'',
    clientData: undefined
};

export default function CheckInReducer(state = defaultState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'UPDATE_USERNAME_IN_STORE': {
            return {
                ...state,
                clientId: payload
            }
        }
        case 'TOGGLE_CHECK_IN_OUT_FULFILLED': {
            return {
                ...state,
                clientData: payload
            }
        }
        default: {
            return state
        }
    }
}