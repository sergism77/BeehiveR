//this is the types.ts in the redux folder
//what should this file do? 
//this file should export the types of actions that we are going to use in our application

import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

