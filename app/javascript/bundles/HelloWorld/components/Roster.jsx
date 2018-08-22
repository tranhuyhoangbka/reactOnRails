import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

const Roster = (props) => {
  return (
    <div>
      <h2>This is a roster page!</h2>
      <Switch>
        <Route path="/roster" exact component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
      </Switch>
    </div>
  );
}

export default Roster;
