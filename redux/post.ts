import { AnyAction } from "@reduxjs/toolkit";
import { getToday } from "../components/components";

// 액션 타입 선언
const SAVE_POST = "post/SAVE_POST" as const;
const DELETE_POST = "post/DELETE_POST" as const;

// Main
let nextId = 1;

export const addPost = (title: string, text: string) => ({
  type: SAVE_POST,
  payload: {
    id: nextId++,
    create: getToday(),
    title,
    text,
  },
});

export const removePost = (id: number) => ({
  type: DELETE_POST,
  payload: id,
});

// 모든 액션 객체들에 대한 타입 준비
// type PostAction = ReturnType<typeof addPost> | ReturnType<typeof removePost>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type Post = {
  id: number;
  create: string;
  title: string;
  text: string;
};

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type PostState = Post[];

// 초기 상태 선언
const initialState: PostState = [];

// 리듀서 작성
function posts(state: PostState = initialState, action: AnyAction): PostState {
  switch (action.type) {
    case SAVE_POST:
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추됩니다.
        id: action.payload.id,
        create: action.payload.create,
        title: action.payload.title,
        text: action.payload.text,
      });
    case DELETE_POST:
      // payload 가 number 인 것이 유추됩니다.
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default posts;
