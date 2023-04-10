//this is the developer.actions.js file in the _actions folder

import { developerConstants } from '../_constants';
import { developerService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const developerActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        developerService.login(username, password)
            .then(
                developer => { 
                    dispatch(success(developer));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(developer) { return { type: developerConstants.LOGIN_REQUEST, developer } }
    function success(developer) { return { type: developerConstants.LOGIN_SUCCESS, developer } }
    function failure(error) { return { type: developerConstants.LOGIN_FAILURE, error } }
}

function logout() {
    developerService.logout();
    return { type: developerConstants.LOGOUT };
}

function register(developer) {
    return dispatch => {
        dispatch(request(developer));

        developerService.register(developer)
            .then(
                developer => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(developer) { return { type: developerConstants.REGISTER_REQUEST, developer } }
    function success(developer) { return { type: developerConstants.REGISTER_SUCCESS, developer } }
    function failure(error) { return { type: developerConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        developerService.getAll()
            .then(
                developers => dispatch(success(developers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: developerConstants.GETALL_REQUEST } }
    function success(developers) { return { type: developerConstants.GETALL_SUCCESS, developers } }
    function failure(error) { return { type: developerConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        developerService.delete(id)
            .then(
                developer => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: developerConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: developerConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: developerConstants.DELETE_FAILURE, id, error } }
}

