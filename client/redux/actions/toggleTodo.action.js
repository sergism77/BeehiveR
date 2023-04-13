//this is the toggleTodo.action.js in the actions folder

import { TOGGLE_TODO } from '../constants/actionTypes'

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
    }

