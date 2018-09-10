declare const PkSpr: any;
import { delay } from 'redux-saga';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { SELECT_POKEMON, EDIT_POKEMON } from 'actions';

export function* helloSaga(): any {}

export function* updateSprites(): any {
    try {
        PkSpr.process_dom();
    } catch (e) {
        console.error(e);
    }
}

export function* spriteSaga() {
    yield takeLatest(SELECT_POKEMON, updateSprites);
}

export function* spriteSaga2() {
    yield takeLatest(EDIT_POKEMON, updateSprites);
}

export function* rootSaga() {
    yield all([
        // spriteSaga(),
        // spriteSaga2()
    ]);
}
