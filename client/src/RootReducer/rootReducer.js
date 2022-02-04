import { combineReducers } from "redux";
import PostReducer from "../components/Post/PostReducer";

export default combineReducers({ post: PostReducer });
