//this is the developer.services.js file in the _services folder

import { authHeader } from '../_helpers';
import { developerConstants } from '../_constants';
import { developerService } from '../_services';

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
