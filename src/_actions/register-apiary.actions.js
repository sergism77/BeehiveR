//this is the register-apiary.actions.js file in the _actions folder

import { registerConstants } from '../_constants';
import { registerService } from '../_services';
import { alertActions } from './';

export const registerActions = {
    register
};

function register(apiary) {
    return dispatch => {
        dispatch(request(apiary));

        registerService.register(apiary)
            .then(
                apiary => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(apiary) { return { type: registerConstants.REGISTER_REQUEST, apiary } }
    function success(apiary) { return { type: registerConstants.REGISTER_SUCCESS, apiary } }
    function failure(error) { return { type: registerConstants.REGISTER_FAILURE, error } }
}
