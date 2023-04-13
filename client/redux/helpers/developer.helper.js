//this is the developer.helper.js file in the _helpers folder

import { developerConstants } from '../_constants';

export function developer(state = {}, action) {
    switch (action.type) {
        case developerConstants.DEVELOPER_REQUEST:
            return {
                loading: true,
                developer: action.developer
            };
        case developerConstants.DEVELOPER_SUCCESS:
            return {
                loaded: true,
                developer: action.developer
            };
        case developerConstants.DEVELOPER_FAILURE:
            return {};
        default:
            return state
    }
}
