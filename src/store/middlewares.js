import 'regenerator-runtime/runtime'; // See https://redux-saga.js.org/
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

// You can add middlewares you want here.
const middlewares = [
  sagaMiddleware,
];

export default middlewares;
