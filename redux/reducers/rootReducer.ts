import { combineReducers } from "redux";
import main from "./main";

const rootReducer = combineReducers({
  main,
});

export type ReducerType = ReturnType<typeof rootReducer>; // useSelector 사용 할 때 필요

export default rootReducer;
