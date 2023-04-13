//this is the weather.reducer.js file in the reducers folder

import { weatherConstants } from '../_constants/index.constants';

export function weather(state = {}, action) {
    switch (action.type) {
        case weatherConstants.WEATHER_REQUEST:
        return {
            loading: true,
            weather: action.weather
        };
        case weatherConstants.WEATHER_SUCCESS:
        return {
            loaded: true,
            weather: action.weather
        };
        case weatherConstants.WEATHER_FAILURE:
        return {};
        default:
        return state
    }
    }

