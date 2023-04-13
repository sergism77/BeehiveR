//this is the setVisibilityFilterReducer.js file in the reducers folder

import { SET_VISIBILITY_FILTER } from '../constants/setVisibilityFilter.constants'
import { VisibilityFilters } from '../constants/visibilityFilters.constants'

const { SHOW_ALL } = VisibilityFilters

export default function setVisibilityFilterReducer(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

