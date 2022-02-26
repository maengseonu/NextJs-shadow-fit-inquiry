import { combineReducers } from "redux";
import posts from "./posts";
import loading from "./loading";

// rootReducer
const rootReducer = combineReducers({
  posts,
  loading,
});

// 루트 리듀서의 반환값를 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보낸다
export type ReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
