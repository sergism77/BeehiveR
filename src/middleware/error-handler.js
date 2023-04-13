//this is the error-handler.js file in the middleware folder

import { history } from '../helpers';
import { alertActions } from '../_actions';
import { registerConstants } from '../_constants';

export function errorHandler(error) {
    return dispatch => {
        let { status, data } = error.response;
        if (status === 401) {
            // auto logout if 401 response returned from api
            dispatch(alertActions.error('Unauthorized'));
            dispatch({ type: registerConstants.LOGOUT });
            history.push('/login');
        } else if (status === 400) {
            // auto logout if 401 response returned from api
            dispatch(alertActions.error(data.message));
        } else if (status === 500) {
            // auto logout if 401 response returned from api
            dispatch(alertActions.error('Internal Server Error'));
        } else {
            dispatch(alertActions.error(error.toString()));
        }
    }
}
