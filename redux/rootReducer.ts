import { combineReducers } from "redux";
import posts from "./post";

// rootReducer
const rootReducer = combineReducers({
  posts,
});
export type ReducerType = ReturnType<typeof rootReducer>; // useSelector 사용 할 때 필요

export default rootReducer;
