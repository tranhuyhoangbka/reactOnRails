import React from 'react';
import { Provider } from 'react-redux';

// import configureStore from '../store/helloWorldStore';
import configureStore from '../store/peopleStore';
// import HelloWorldContainer from '../containers/HelloWorldContainer';
import PeopleContainer from '../containers/PeopleContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const HelloWorldApp = (props) => (
  <Provider store={configureStore(props)}>
    <PeopleContainer />
  </Provider>
);

export default HelloWorldApp;
