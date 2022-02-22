import { combineReducers } from "redux";
import { main, postReducer } from "./main";

const rootReducer = combineReducers({
  main,
  postReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>; // useSelector 사용 할 때 필요

export default rootReducer;
