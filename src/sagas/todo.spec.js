import { put, takeLatest, call } from 'redux-saga/effects';
import { makeFakeTodos, fetchTodo, watchFetchTodo } from './todo';
import { FETCH_TODO } from '../constants/actionTypes';
import { fetchTodoSuccess, fetchTodoFailure } from '../actions/todo';

describe('Watching todos', () => {
  const watching = watchFetchTodo();
  it('Should handle waching todos', () => {
    // arrange
    const expected = takeLatest(FETCH_TODO, fetchTodo);

    // act
    const actual = watching.next().value;

    // assert
    expect(actual).toEqual(expected);
  });
  describe('Fetching todos', () => {
    const fetching = fetchTodo();
    it('Should handle making todos', () => {
      // arrange
      const expected = call(makeFakeTodos);
      // act
      const actual = fetching.next().value;
      // assert
      expect(actual).toEqual(expected);
    });
    // When test saga(generator) should remind 'call', 'race' ...etc
    // isn't actually performed.
    // https://github.com/jfairbank/redux-saga-test-plan/issues/38
    it('Should handle success', () => {
      // arrange
      const expected = put(fetchTodoSuccess([]));
      // act
      const actual = fetching.next([]).value;
      // assert
      expect(actual).toEqual(expected);
    });
    it('Should handle error', () => {
      // arrange
      const expected = put(fetchTodoFailure('error'));
      // act
      const actual = fetching.throw('error').value;
      // assert
      expect(actual).toEqual(expected);
    });
    it('Should be done', () => {
      // arrange
      const expected = fetching.next().done;
      // act
      const actual = true;
      expect(actual).toEqual(expected);
    });
  });
});
