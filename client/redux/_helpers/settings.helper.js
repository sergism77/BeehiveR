//this is the settings.helper.js file in the helpers folder

import { settingsConstants } from '../_constants/index.constants';

export const settingsHelper = {
    getSettings
};

function getSettings() {
    return dispatch => {
        dispatch(request());

        settingsService.getSettings()
            .then(
                settings => { 
                    dispatch(success(settings));
                    history.push('/settings');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: settingsConstants.SETTINGS_REQUEST } }
    function success(settings) { return { type: settingsConstants.SETTINGS_SUCCESS, settings } }
    function failure(error) { return { type: settingsConstants.SETTINGS_FAILURE, error } }
}
