//this is the apiaryAcctions.js file

import { createAction } from 'redux-actions';
import { apiaryService } from '../services/apiaryService';

export const getApiaries = createAction('GET_APIARIES', apiaryService.getApiaries);
export const getApiary = createAction('GET_APIARY', apiaryService.getApiary);
export const createApiary = createAction('CREATE_APIARY', apiaryService.createApiary);
export const updateApiary = createAction('UPDATE_APIARY', apiaryService.updateApiary);
export const deleteApiary = createAction('DELETE_APIARY', apiaryService.deleteApiary);


export const apiaryActions = {
    getApiaries,
    getApiary,
    createApiary,
    updateApiary,
    deleteApiary
};

