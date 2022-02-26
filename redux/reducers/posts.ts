import { AnyAction } from "@reduxjs/toolkit";
import { DELETE_POST, IPostState, SAVE_POST } from "../types";

// 초기 상태 선언
const initialState: IPostState = [];

// 리듀서 작성
function posts(
  state: IPostState = initialState,
  action: AnyAction
): IPostState {
  switch (action.type) {
    case SAVE_POST:
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추된다
        id: action.payload.id,
        create: action.payload.create,
        title: action.payload.title,
        text: action.payload.text,
      });
    case DELETE_POST:
      // payload 가 number 인 것이 유추된다
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
}

export default posts;
