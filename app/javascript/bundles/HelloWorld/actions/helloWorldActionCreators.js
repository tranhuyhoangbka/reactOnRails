/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE, DELETE_NAME, CREATE_POST, DELETE_POST, EDIT_POST } from '../constants/helloWorldConstants';

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
