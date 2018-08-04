import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_TODO } from '../constants/actionTypes';
import { fetchTodoSuccess, fetchTodoFailure } from '../actions/todo';
import { generateId } from '../utils/id';

// create fake todos
export function makeFakeTodos() {
  return new Promise(resolve => (
    setTimeout(() => resolve([...Array(3)].map(() => ({
      id: generateId(),
      description: 'INITIAL TODO',
      done: false,
    }))), 3000)
  ));
}
export function* fetchTodo() {
  try {
    const todos = yield call(makeFakeTodos);
    yield put(fetchTodoSuccess(todos));
  }
  catch (err) {
    // error handling
    const error = err || 'error';
    yield put(fetchTodoFailure(error));
  }
}
export function* watchFetchTodo() {
  yield takeLatest(FETCH_TODO, fetchTodo);
}

export default function* () {
  yield all([
    fork(watchFetchTodo),
  ]);
}
