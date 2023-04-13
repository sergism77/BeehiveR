//this is the getAllActionsReducer.js file in the reducers folder

import { userConstants } from '../_constants';
import { alertConstants } from '../_constants';

export function getAllActions(state = {}, action) {
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
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        case userConstants.REGISTER_REQUEST:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}

