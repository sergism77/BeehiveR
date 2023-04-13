//this is the profileLikes.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileLikesConstants } from '../_constants';
import { profileLikesService } from '../_services';
import { alertActions } from './';

export function* profileLikesSaga() {
    yield takeEvery(profileLikesConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileLikes = yield call(profileLikesService.getAll, action.profileId);
        yield put({ type: profileLikesConstants.GETALL_SUCCESS, profileLikes });
    } catch (error) {
        yield put({ type: profileLikesConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

