//this is the history.reducer.js file in the _reducers folder

import { historyConstants } from '../_constants/index.constants';

export function history(state = {}, action) {
    switch (action.type) {
        case historyConstants.HISTORY_REQUEST:
            return {
                loading: true,
                history: action.history
            };
        case historyConstants.HISTORY_SUCCESS:
            return {
                loaded: true,
                history: action.history
            };
        case historyConstants.HISTORY_FAILURE:
            return {};
        default:
            return state
    }
}
