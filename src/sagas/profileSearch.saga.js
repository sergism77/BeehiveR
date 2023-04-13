//this is the profileSearch.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSearchConstants } from '../_constants';
import { profileSearchService } from '../_services';
import { alertActions } from './';

export function* profileSearchSaga() {
    yield takeEvery(profileSearchConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSearch = yield call(profileSearchService.getAll, action.profileId);
        yield put({ type: profileSearchConstants.GETALL_SUCCESS, profileSearch });
    } catch (error) {
        yield put({ type: profileSearchConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}
