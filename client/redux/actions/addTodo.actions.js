//this is the addTodo.actions file in the actions folder

import { ADD_TODO } from '../constants/actionTypes'

export function addTodo(text) {
    return { type: ADD_TODO, text }
    }

