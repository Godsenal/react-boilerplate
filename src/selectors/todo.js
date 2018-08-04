import { createSelector } from 'reselect';
/* Selector */
const getTodos = state => state.todo.todos;
const getFilter = state => state.filter.filter;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case 'ALL':
        return todos;
      case 'INCOMPLETED':
        return todos.filter(item => !item.done);
      case 'COMPLETED':
        return todos.filter(item => item.done);
      default:
        return todos;
    }
  }
);
