//this is the messages.reducer.js file in the _reducers folder

import { messagesConstants } from '../_constants';

export function messages(state = {}, action) {
    switch (action.type) {
        case messagesConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case messagesConstants.GETALL_SUCCESS:
        return {
            items: action.messages
        };
        case messagesConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
        default:
        return state
    }
    }

    