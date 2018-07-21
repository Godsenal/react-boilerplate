import { SET_FILTER } from '../constants/actionTypes';

const initialState = {
  filter: 'ALL',
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}
