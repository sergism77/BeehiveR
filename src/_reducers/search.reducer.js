//this is the search.reducer.js file in the _reducers folder

import { searchConstants } from '../_constants';
import { postsConstants } from '../_constants';

export function search(state = {}, action) {
    switch (action.type) {
        case searchConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case searchConstants.GETALL_SUCCESS:
        return {
            items: action.posts
        };
        case searchConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }
