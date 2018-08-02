import { all, fork } from 'redux-saga/effects';
import todo from './todo';

export default function* rootSaga() {
  yield all([
    fork(todo),
  ]);
}
