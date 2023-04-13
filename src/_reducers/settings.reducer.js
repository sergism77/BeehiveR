//this is the settings.reducer.js file in the reducers folder

import { settingsConstants } from '../_constants';

export function settings(state = {}, action) {
    switch (action.type) {
        case settingsConstants.SETTINGS_REQUEST:
        return {
            loading: true,
            settings: action.settings
        };
        case settingsConstants.SETTINGS_SUCCESS:
        return {
            loaded: true,
            settings: action.settings
        };
        case settingsConstants.SETTINGS_FAILURE:
        return {};
        default:
        return state
    }
    }
