import { combineReducers } from "redux";
import { postReducer } from "./main";

const rootReducer = combineReducers({
  postReducer,
});

export default rootReducer;

export type ReducerType = ReturnType<typeof rootReducer>; // useSelector 사용 할 때 필요
