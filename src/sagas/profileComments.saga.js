//this is the profileComments.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileCommentsConstants } from '../_constants';
import { profileCommentsService } from '../_services';
import { alertActions } from './';

export function* profileCommentsSaga() {
    yield takeEvery(profileCommentsConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileComments = yield call(profileCommentsService.getAll, action.profileId);
        yield put({ type: profileCommentsConstants.GETALL_SUCCESS, profileComments });
    } catch (error) {
        yield put({ type: profileCommentsConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

