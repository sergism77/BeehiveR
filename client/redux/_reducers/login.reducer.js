//this is the login.reducer.js file in the reducers folder

import { userConstants } from '../_constants/index.constants';

export function login(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
        return {
            loggingIn: true,
            user: action.user
        };
        case userConstants.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            user: action.user
        };
        case userConstants.LOGIN_FAILURE:
        return {};
        case userConstants.LOGOUT:
        return {};
        default:
        return state
    }
    }


    //what reducers should we have in the_reducers folder?
    //we should have a reducer for each of the actions we have in the actions folder
    //we should have a reducer for each of the constants we have in the constants folder
    //we should have a reducer for each of the services we have in the services folder
    //do we need both _actions and actions folders? no, we only need the actions folder