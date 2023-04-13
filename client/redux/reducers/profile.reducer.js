//this is the profile.reducer.js file

import { profileConstants } from '../_constants';
import { postsConstants } from '../_constants';
import { commentsConstants } from '../_constants';
import { likesConstants } from '../_constants';

export function profile(state = {}, action) {
    switch (action.type) {
        case profileConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case profileConstants.GETALL_SUCCESS:
        return {
            items: action.profile
        };
        case profileConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    