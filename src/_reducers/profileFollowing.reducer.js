//this is the profileFollowing.reducer.js file in the _reducers folder

import { profileFollowingConstants } from '../_constants';

export function profileFollowing(state = {}, action) {
    switch (action.type) {
        case profileFollowingConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case profileFollowingConstants.GETALL_SUCCESS:
        return {
            items: action.profileFollowing
        };
        case profileFollowingConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    