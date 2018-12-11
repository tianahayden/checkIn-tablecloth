import axios from 'axios';

export const updateUsername = (username) => {
    return {
        type: 'UPDATE_USERNAME_IN_STORE',
        payload: username
    }
};

export const checkInOut = (username) => {
    return {
        type: 'TOGGLE_CHECK_IN_OUT',
        payload: axios.put(`/api/clients/checkInOut`, { username: username })
        .then((res) => res.data)
    }
};