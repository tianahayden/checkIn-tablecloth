const defaultState = {
    clientId:''
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
        default: {
            return state
        }
    }
}