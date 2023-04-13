//this is the likes.reducer.js file in the _reducers folder

import { likesConstants } from '../_constants';

export function likes(state = {}, action) {
    switch (action.type) {
        case likesConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case likesConstants.GETALL_SUCCESS:
        return {
            items: action.likes
        };
        case likesConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }
