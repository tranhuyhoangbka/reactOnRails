import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE, DELETE_NAME, CREATE_POST, DELETE_POST, EDIT_POST } from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case DELETE_NAME:
      return '';
    default:
      return state;
  }
};

const postList = (state = '', action) => {
  switch (action.type) {
    case CREATE_POST:
      const posts = [].concat(state);
      posts.unshift(action.post);
      return posts;
    case DELETE_POST:
      return state.filter((post) => post.id !== action.postId);
    case EDIT_POST:
      return state.map((post) => post.id !== action.post.id ? post : action.post);
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({ name, postList });

export default helloWorldReducer;
