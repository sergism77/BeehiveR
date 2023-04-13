//this is the toggleTodoReducer.js in the reducers folder

import { TOGGLE_TODO } from '../constants/toggleTodo.constants'

export default function toggleTodoReducer(state = [], action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

