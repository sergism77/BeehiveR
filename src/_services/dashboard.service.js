//this is the dasboard.service.js file in the services folder

import { dashboardConstants } from '../_constants/index.constants';
import { dashboardService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const dashboardActions = {
    getDashboard
};

function getDashboard() {
    return dispatch => {
        dispatch(request());

        dashboardService.getDashboard()
            .then(
                dashboard => { 
                    dispatch(success(dashboard));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: dashboardConstants.DASHBOARD_REQUEST } }
    function success(dashboard) { return { type: dashboardConstants.DASHBOARD_SUCCESS, dashboard } }
    function failure(error) { return { type: dashboardConstants.DASHBOARD_FAILURE, error } }
}

