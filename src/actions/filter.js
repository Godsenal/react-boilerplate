import { SET_FILTER } from '../constants/actionTypes';

export function setFilter(filter = 'ALL') {
  return {
    type: SET_FILTER,
    filter,
  };
}
