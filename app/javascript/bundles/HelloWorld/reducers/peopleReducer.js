import {combineReducers} from 'redux';
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants/helloWorldConstants';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

const appData = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({appData});

export default rootReducer;
