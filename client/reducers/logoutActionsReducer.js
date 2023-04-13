//this is the logoutActionsReducer.js file in the reducers folder

import { userConstants } from '../_constants';

export function logout(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}
