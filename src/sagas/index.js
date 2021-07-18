import { all } from 'redux-saga/effects'
import {
  watchSetUsers,
  watchAddUsers,
  watchRemoveUsers,
  watchUpdateUsers
} from './userSaga'

export default function* rootSaga() {
  yield all([
    watchSetUsers(),
    watchAddUsers(),
    watchRemoveUsers(),
    watchUpdateUsers(),
  ])
}