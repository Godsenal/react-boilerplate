/**
 * Import actionTypes then Wirte action function code here.
*/
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODO,
} from '../constants/actionTypes';
import { generateId } from '../utils/id';

export function addTodo(description) {
  return {
    type: ADD_TODO,
    todo: {
      id: generateId(),
      description,
      done: false,
    },
  };
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
export function fetchTodo() {
  return {
    type: FETCH_TODO,
  };
}
