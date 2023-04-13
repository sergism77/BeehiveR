//this is the profileLikes.reducer.js file in the _reducers folder

import { profileLikesConstants } from '../_constants';

export function profileLikes(state = {}, action) {
    switch (action.type) {
        case profileLikesConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case profileLikesConstants.GETALL_SUCCESS:
        return {
            items: action.profileLikes
        };
        case profileLikesConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    