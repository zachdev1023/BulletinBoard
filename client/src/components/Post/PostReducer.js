import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  POST_LOADING,
} from "../../types/types";

const initialState = { posts: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload), loading: false
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts], loading: false
      };

    case POST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};

export default PostReducer;
