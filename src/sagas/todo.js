import { delay } from 'redux-saga';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { FETCH_TODO, FETCH_TODO_FAILURE, FETCH_TODO_SUCCESS } from '../constants/actionTypes';
import { generateId } from '../utils/id';

// create fake todos
function makeFakeTodos() {
  return [...Array(3)].map(() => ({
    id: generateId(),
    description: 'INITIAL TODO',
    done: false,
  }));
}
function* fetchTodo() {
  try {
    // give delay to look like an asynchronous task
    yield delay(2000);
    const todos = makeFakeTodos();
    yield put({
      type: FETCH_TODO_SUCCESS,
      todos,
    });
  }
  catch (err) {
    // error handling
    yield put({
      type: FETCH_TODO_FAILURE,
      error: 'Fail to fetch todos',
    });
  }
}
function* watchFetchTodo() {
  yield takeLatest(FETCH_TODO, fetchTodo);
}

export default function* () {
  yield all([
    fork(watchFetchTodo),
  ]);
}
