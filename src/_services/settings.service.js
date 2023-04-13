//this is the settings.service.js file in the services folder

import { settingsConstants } from '../_constants/index.constants';
import { settingsService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const settingsActions = {
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
