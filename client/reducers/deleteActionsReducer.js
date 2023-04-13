//this is the deleteActionsReducer.js file in the reducers folder

import { userConstants } from '../_constants';

export function deleteActions(state = {}, action) {
    switch (action.type) {
        case userConstants.DELETE_REQUEST:
            return {
                deleting: true
            };
        case userConstants.DELETE_SUCCESS:
            return {
                deleted: true
            };
        case userConstants.DELETE_FAILURE:
            return {};
        default:
            return state
    }
}

