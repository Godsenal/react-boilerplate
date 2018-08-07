import { all, fork, call, put, take } from 'redux-saga/effects';
import { FETCH_TODO } from '../constants/actionTypes';
import { fetchTodoSuccess, fetchTodoFailure } from '../actions/todo';
import { generateId } from '../utils/id';

// create fake todos
export function makeFakeTodos(ms) {
  return new Promise(resolve => (
    setTimeout(() => resolve([...Array(3)].map(() => ({
      id: generateId(),
      description: 'INITIAL TODO',
      done: false,
    }))), ms)
  ));
}
export function* fetchTodo() {
  try {
    const todos = yield call(makeFakeTodos, 1000);
    yield put(fetchTodoSuccess(todos));
  }
  catch (err) {
    // error handling
    const error = err || 'error';
    yield put(fetchTodoFailure(error));
  }
}
export function* watchFetchTodo() {
  while (true) {
    yield take(FETCH_TODO);
    yield fork(fetchTodo);
  }
}

export default function* () {
  yield all([
    fork(watchFetchTodo),
  ]);
}
