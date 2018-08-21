import {combineReducers} from 'redux';
import user from './userReducer';
import dashboard from './dashboardReducer';
import dashboard2 from './dashboard2Reducer';
import dashboard3 from './dashboard3Reducer';

const travelRootReducer = combineReducers({user, dashboard, dashboard2, dashboard3});

export default travelRootReducer;
