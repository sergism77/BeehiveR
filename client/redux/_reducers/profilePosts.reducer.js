//this is the profilePosts.reducer.js file in the _reducers folder

import { profilePostsConstants } from '../_constants';

export function profilePosts(state = {}, action) {
    switch (action.type) {
        case profilePostsConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case profilePostsConstants.GETALL_SUCCESS:
        return {
            items: action.profilePosts
        };
        case profilePostsConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    