import 'regenerator-runtime/runtime'; // See https://redux-saga.js.org/
import createSagaMiddleware from 'redux-saga';
import logger from './logger';

const sagaMiddleware = createSagaMiddleware();

// You can add middlewares you want here.
const middlewares = {
  sagaMiddleware,
  logger,
};

export default middlewares;
