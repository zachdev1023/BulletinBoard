import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  POST_LOADING,
} from "../../types/types";

import axios from "axios";

export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get("api/posts")
    .then((res) => dispatch({ type: GET_POSTS, payload: res.data }));
};

export const addPost = (post) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .post("api/posts", post)
    .then((res) => dispatch({ type: ADD_POST, payload: res.data }));
};

export const deletePost = (id) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .delete(`api/posts/${id}`)
    .then((res) => dispatch({ type: DELETE_POST, payload: id }));
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};

// export const updatePost = () => {
//   type: UPDATE_POST;
// };

// export const deletePost = () => {
//   type: DELETE_POST;
// };
