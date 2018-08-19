import {createStore, applyMiddleware} from 'redux';
import peopleReducer from '../reducers/peopleReducer';
import thunk from 'redux-thunk';

const configureStore = (railsProps) => (
  createStore(peopleReducer, applyMiddleware(thunk))
);

export default configureStore


