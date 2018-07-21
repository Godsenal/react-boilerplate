/**
 * Import actionTypes then Wirte action function code here.
*/
import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/actionTypes';

let currentId = 0;
export function addTodo(description) {
  return {
    type: ADD_TODO,
    todo: {
      id: currentId++,
      description,
      done: false,
    },
  };
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
