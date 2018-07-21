import { ADD_TODO, TOGGLE_TODO } from '../constants/actionTypes';

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
