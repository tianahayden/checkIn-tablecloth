const defaultState = {
};

export default function HomeReducer(state = defaultState, action) {
    const { payload, type } = action;

    switch (type) {
        // case 'GET_MOVIE_DETAILS_FULFILLED': {
        //     return {
        //         ...state,
        //         movieDetails: payload
        //     }
        // }
        default: {
            return state
        }
    }
}