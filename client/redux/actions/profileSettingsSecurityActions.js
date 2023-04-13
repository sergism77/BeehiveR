//this is the profileSettingsSecurityActions.js file in the _actions folder

export const profileSettingsSecurityActions = {
    getAll,
    update
};
 
function getAll(profileId) {
    return dispatch => {
        dispatch(request());
 
        profileSettingsSecurityService.getAll(profileId)
            .then(
                profileSettingsSecurity => dispatch(success(profileSettingsSecurity)),
                error => dispatch(failure(error.toString()))
            );
    };
 
    function request() { return { type: profileSettingsSecurityConstants.GETALL_REQUEST } }
    function success(profileSettingsSecurity) { return { type: profileSettingsSecurityConstants.GETALL_SUCCESS, profileSettingsSecurity } }
    function failure(error) { return { type: profileSettingsSecurityConstants.GETALL_FAILURE, error } }
}

function update(profileSettingsSecurity) {
    return dispatch => {
        dispatch(request(profileSettingsSecurity));
 
        profileSettingsSecurityService.update(profileSettingsSecurity)
            .then(
                profileSettingsSecurity => { 
                    dispatch(success(profileSettingsSecurity));
                    //history.push('/');
                    //dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                }
            );
    };
 
    function request(profileSettingsSecurity) { return { type: profileSettingsSecurityConstants.UPDATE_REQUEST, profileSettingsSecurity } }
    function success(profileSettingsSecurity) { return { type: profileSettingsSecurityConstants.UPDATE_SUCCESS, profileSettingsSecurity } }
    function failure(error) { return { type: profileSettingsSecurityConstants.UPDATE_FAILURE, error } }
}

