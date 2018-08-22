import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from '../layout/Layout';
import TestRouter1 from '../components/TestRouter1';
import TestRouter2 from '../components/TestRouter2';
import TestRouter3 from '../components/TestRouter3';
import Roster from '../components/Roster';

const Routes = (props) => (
  <Layout>
    <Switch>
      <Route path="/" component={TestRouter1} exact />
      <Route path="/test_router2" component={TestRouter2} />
      <Route path="/test_router3" component={TestRouter3} />
      <Route path="/roster" component={Roster} />
    </Switch>
  </Layout>
);

export default Routes;
