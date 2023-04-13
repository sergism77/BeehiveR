//this is the handle-response.reducer.js file

import { userConstants } from '../_constants/index.constants';

export function handleResponse(state = {}, action) {
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
