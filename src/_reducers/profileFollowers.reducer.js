//this is the profileFollowers.reducer.js file in the _reducers folder

import { profileFollowersConstants } from '../_constants';

export function profileFollowers(state = {}, action) {
    switch (action.type) {
        case profileFollowersConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case profileFollowersConstants.GETALL_SUCCESS:
        return {
            items: action.profileFollowers
        };
        case profileFollowersConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    