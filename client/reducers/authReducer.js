//this is the reducer for the auth state

import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from '../actions/types';

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case LOGIN_ERROR:
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case SIGNOUT_SUCCESS:
            console.log('signout success');
            return state;
        default:
            return state;
    }
}

export default authReducer;

//we need to create a rootReducer
//what name should we give to rootReducer file?
//this is the rootReducer file
//rootReducer has already been created
//we need to create a store
//what name should we give to store file?
