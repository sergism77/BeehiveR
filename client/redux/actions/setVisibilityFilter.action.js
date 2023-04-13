//this is the setVisibilityFilter.action.js in the actions folder

import { SET_VISIBILITY_FILTER } from '../constants/actionTypes'

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
    }

    