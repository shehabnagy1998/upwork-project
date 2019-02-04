import { takeEvery, put, all } from 'redux-saga/effects'


function* setActiveAsync(action) {
    yield put({ type: "SET_Active_ASYNC", value: action.value })
}

function* setActive() {
    yield takeEvery("SET_ACTIVE", setActiveAsync)
}

function* setAnimationAsync(action) {
    yield put({ type: "SET_ANIMATION_ASYNC", value: action.value })
}

function* setAnimation() {
    yield takeEvery("SET_ANIMATION", setAnimationAsync)
}

export default function* rootSaga() {
    yield all([
        setActive(),
        setAnimation()
    ])
}