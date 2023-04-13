//this is the follows.reducer.js file in the _reducers folder

import { followsConstants } from '../_constants';

export function follows(state = {}, action) {
    switch (action.type) {
        case followsConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case followsConstants.GETALL_SUCCESS:
        return {
            items: action.follows
        };
        case followsConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    