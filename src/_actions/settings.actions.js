//this is the settings.actions.js file in the _actions folder

export const settingsActions = {
    getAll,
    update
};

function getAll() {
    return dispatch => {
        dispatch(request());

        settingsService.getAll()
            .then(
                settings => dispatch(success(settings)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: settingsConstants.GETALL_REQUEST } }
    function success(settings) { return { type: settingsConstants.GETALL_SUCCESS, settings } }
    function failure(error) { return { type: settingsConstants.GETALL_FAILURE, error } }
}

function update(settings) {
    return dispatch => {
        dispatch(request(settings));

        settingsService.update(settings)
            .then(
                settings => { 
                    dispatch(success());
                    dispatch(alertActions.success('Settings updated'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request(settings) { return { type: settingsConstants.UPDATE_REQUEST, settings } }
    function success(settings) { return { type: settingsConstants.UPDATE_SUCCESS, settings } }
    function failure(error) { return { type: settingsConstants.UPDATE_FAILURE, error } }
}

