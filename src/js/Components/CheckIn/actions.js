import axios from 'axios';

export const updateUsername = (username) => {
    return {
        type: 'UPDATE_USERNAME_IN_STORE',
        payload: username
    }
};

export const checkInOut = (username) => {
    console.log('in actions')
    return {
        type: 'TOGGLE_CHECK_IN_OUT',
        payload: axios.put(`/api/clients/checkInOut`, { username: username })
        .then((res) => {
            console.log('this is res', res)
        })
    }
};