import { createSelector } from 'reselect';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from '../constants/actionTypes';


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
  status: 'INIT',
  error: '',
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
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id),
      };
    case FETCH_TODO:
      return {
        ...state,
        status: 'FETCHING',
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...action.todos],
        status: 'SUCCESS',
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        status: 'FAILURE',
        error: action.error,
      };
    default:
      return state;
  }
}
