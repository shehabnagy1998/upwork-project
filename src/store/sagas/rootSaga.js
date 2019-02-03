import { takeEvery, put, all } from 'redux-saga/effects'


function* setActiveAsync(action) {
    yield put({ type: "SET_TRUE_ASYNC", value: action.value })
}

function* setActive() {
    yield takeEvery("SET_ACTIVE", setActiveAsync)
}

export default function* rootSaga() {
    yield all([
        setActive()
    ])
}