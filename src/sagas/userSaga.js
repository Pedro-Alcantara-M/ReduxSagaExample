import { getUsers } from 'redux/actions/users'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import database from 'database'

function* getListRequest() {
  const users = yield call(database.getAll)
  //yield put (actions.getAll(users))
}

function* watchRequestGetList() {
  // yield takeLatest(ACTIONS.USER.REQUEST_GET_ALL, getListRequest)
}

function* userSagas() {
  yield all([watchRequestGetList()])
}

export { userSagas }