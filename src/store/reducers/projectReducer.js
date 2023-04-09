//this is the reducer for the project collection
//
import { CREATE_PROJECT, DELETE_PROJECT } from '../actions/types';
import { firestore } from 'firebase';

const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            console.log('created project', action.project);
            return state;
        case DELETE_PROJECT:
            console.log('deleted project', action.id);
            return state;
        default:
            return state;
    }
}

export default projectReducer;