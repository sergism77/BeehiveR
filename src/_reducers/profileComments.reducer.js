//this is the profileComments.reducer.js file in the _reducers folder

import { profileCommentsConstants } from '../_constants';

export function profileComments(state = {}, action) {
    switch (action.type) {
        case profileCommentsConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case profileCommentsConstants.GETALL_SUCCESS:
        return {
            items: action.profileComments
        };
        case profileCommentsConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }
