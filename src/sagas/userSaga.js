import { put, takeEvery } from 'redux-saga/effects'

function* setUsers(users) {
  yield put({ type: 'SET_USERS_STATE', payload: users })
}

function* addUsers(users) {
  yield ({ type: 'ADD_USERS_STATE', payload: users })
}

function* removeUsers(users) {
  yield put({ type: 'REMOVE_USERS_STATE', payload: users })
}

function* updateUsers(users) {
  yield put({ type: 'UPDATE_USERS_STATE', payload: users })
}


export function* watchSetUsers() {
  yield takeEvery('SET_USERS', setUsers)
}

export function* watchAddUsers() {
  yield takeEvery('ADD_USERS', addUsers)
}

export function* watchRemoveUsers() {
  yield takeEvery('REMOVE_USERS', removeUsers)
}

export function* watchUpdateUsers() {
  yield takeEvery('UPDATE', updateUsers)
}

