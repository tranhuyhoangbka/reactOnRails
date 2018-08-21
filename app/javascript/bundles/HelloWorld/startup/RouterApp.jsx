import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes/routes';

const RouterApp = (props) => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default RouterApp;
