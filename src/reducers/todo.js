import { createSelector } from 'reselect';
import { ADD_TODO, TOGGLE_TODO } from '../constants/actionTypes';


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
/* Reducer */
const initialState = {
  todos: [],
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(item => (item.id === action.id ? { ...item, done: !item.done } : item)),
      };
    default:
      return state;
  }
}
