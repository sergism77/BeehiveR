//this is the weather.helper.js file in the _helpers folder

import { weatherConstants } from '../_constants';
import { weatherService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const weatherActions = {
    getWeather
};

function getWeather() {
    return dispatch => {
        dispatch(request());

        weatherService.getWeather()
            .then(
                weather => { 
                    dispatch(success(weather));
                    //history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: weatherConstants.WEATHER_REQUEST } }
    function success(weather) { return { type: weatherConstants.WEATHER_SUCCESS, weather } }
    function failure(error) { return { type: weatherConstants.WEATHER_FAILURE, error } }
}

