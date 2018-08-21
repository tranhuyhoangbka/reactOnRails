import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/TravelStore';
import DashboardContainer from '../containers/DashboardContainer';
import Dashboard2Container from '../containers/Dashboard2Container';
import Dashboard3Container from '../containers/Dashboard3Container';

const TravelApp = (props) => (
  <Provider store={configureStore()}>
    <div className="container">
      <div className="row">
        <DashboardContainer />
        <Dashboard2Container />
        <Dashboard3Container />
      </div>
    </div>
  </Provider>
);

export default TravelApp;
