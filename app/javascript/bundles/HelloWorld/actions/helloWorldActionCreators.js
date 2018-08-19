/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE, DELETE_NAME, CREATE_POST, DELETE_POST, EDIT_POST, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/helloWorldConstants';
import getPeople from '../data/api';

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
});

export const deleteName = () => ({
  type: DELETE_NAME
});

export const createPost = (post) => ({
  type: CREATE_POST,
  post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const updatePost = (post) => ({
  type: EDIT_POST,
  post
});

// test redux-thunk

export function getData() {
  return {
    type: FETCHING_DATA
  };
};

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
};

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  };
};

export function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    getPeople().then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(getDataSuccess(data.people));
    })
    .catch((err) => console.log('err:', err));
  };
};
