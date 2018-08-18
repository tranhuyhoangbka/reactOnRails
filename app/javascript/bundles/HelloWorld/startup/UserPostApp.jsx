import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/helloWorldStore';
import PostContainer from '../containers/PostContainer';

const UserPostApp = (props) => (
  <Provider store={configureStore(props)}>
    <PostContainer />
  </Provider>
);

export default UserPostApp;
