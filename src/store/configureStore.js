import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import middlewares from './middlewares';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

function configureStoreProd(initialState) {
  const { sagaMiddleware } = middlewares;
  const prodMiddlewares = [
    sagaMiddleware,
  ];
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...prodMiddlewares)
  ));
  sagaMiddleware.run(rootSaga);
  return store;
}

/* Use redux-immutable-state-invariant
   which watct state's immutability
*/
function configureStoreDev(initialState) {
  const { sagaMiddleware, logger } = middlewares;
  const devMiddlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware,
    logger,
    /* Redux middlewares like thunks */
  ];
  // https://github.com/zalmoxisus/redux-devtools-extension setting
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...devMiddlewares)
  ));
  // https://webpack.js.org/api/hot-module-replacement/
  // enable hot module replacement on reducer.
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;


export default configureStore;
