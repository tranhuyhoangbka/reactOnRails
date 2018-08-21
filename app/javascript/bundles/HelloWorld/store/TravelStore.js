import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import travelRootReducer from '../reducers/travel/index';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
  const store = createStore(travelRootReducer, initialState,
    compose(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
