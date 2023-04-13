//this is the addTodoReducer.js file in the reducers folder

import { ADD_TODO } from '../constants/addTodo.constants'

export default function addTodoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

