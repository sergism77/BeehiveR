//this is the comments.reducer.js file in the _reducers folder

import { commentsConstants } from '../_constants';

export function comments(state = {}, action) {
    switch (action.type) {
        case commentsConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case commentsConstants.GETALL_SUCCESS:
        return {
            items: action.comments
        };
        case commentsConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }
    