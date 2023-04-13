//this is the notifications.reducer.js file in the _reducers folder

import { notificationsConstants } from '../_constants';

export function notifications(state = {}, action) {
    switch (action.type) {
        case notificationsConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case notificationsConstants.GETALL_SUCCESS:
        return {
            items: action.notifications
        };
        case notificationsConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    