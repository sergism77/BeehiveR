//this is the handle-response.actions.js file in the actions folder

export const handleResponseConstants = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
};

export const handleResponseActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        handleResponseService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: handleResponseConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: handleResponseConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: handleResponseConstants.LOGIN_FAILURE, error } }
}

function logout() {
    handleResponseService.logout();
    return { type: handleResponseConstants.LOGOUT };
}

