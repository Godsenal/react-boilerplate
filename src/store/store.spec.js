import configureStore from './configureStore';
import * as filterActions from '../actions/filter';
import * as todoActions from '../actions/todo';
import { getFilteredTodos } from '../selectors/todo';

describe('Store', () => {
  const store = configureStore();
  it('Should handle setting filter', () => {
    // arrange
    const filter = 'COMPLETED';
    // act
    const action = filterActions.setFilter(filter);
    store.dispatch(action);
    // assert
    const actual = store.getState().filter.filter;
    const expected = filter;
    expect(actual).toEqual(expected);
  });
  it('Should handle adding todos', () => {
    // arrange
    const todo = 'Test TODO';
    // act
    const action = todoActions.addTodo(todo);
    store.dispatch(action);
    // assert
    const actual = store.getState().todo.todos[0];
    const expected = {
      id: 0,
      description: 'Test TODO',
      done: false,
    };
    expect(actual).toEqual(expected);
  });
  it('Should handle toggling todos', () => {
    // act
    const action = todoActions.toggleTodo(0);
    store.dispatch(action);
    // assert
    const actual = store.getState().todo.todos[0].done;
    const expected = true;
    expect(actual).toEqual(expected);
  });
  it('Should display filtered todos', () => {
    // arrange
    const todos = [
      'todo1',
      'todo2',
      'todo3',
    ];
    const filter = 'COMPLETED';
    // 위 should handle toggling todos 에서 toggle 한 todo만 보여야 함.
    const expected = [
      {
        id: 0,
        description: 'Test TODO',
        done: true,
      },
    ];
    // act
    todos.map((todo) => store.dispatch(todoActions.addTodo(todo)));
    store.dispatch(filterActions.setFilter(filter));
    const state = store.getState();
    const actual = getFilteredTodos(state);
    // assert
    expect(actual).toEqual(expected);
  });
});
