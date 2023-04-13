//this is the posts.reducer.js file in the _reducers folder

import { postsConstants } from '../_constants';

export function posts(state = {}, action) {
    switch (action.type) {
        case postsConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case postsConstants.GETALL_SUCCESS:
        return {
            items: action.posts
        };
        case postsConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }
