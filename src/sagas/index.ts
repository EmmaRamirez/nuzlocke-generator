import { delay } from 'redux-saga';
import { put, call, takeEvery, all } from 'redux-saga/effects';

export function* helloSaga(): any {
    console.log('Hello Saga');
}

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* rootSaga() {
    yield all([helloSaga(), watchIncrementAsync()]);
}
