// 액션 타입 선언
export const SAVE_POST = "post/SAVE_POST" as const;
export const DELETE_POST = "post/DELETE_POST" as const;
export const GLOBAL_LOADING = "load/LOADING" as const;
export const GLOBAL_LOADED = "load/LOADED" as const;

// 상태에서 사용 할 게시글 항목 데이터 타입 정의
export interface IPost {
  id: number;
  create: string;
  title: string;
  text: string;
}
// posts에서 관리할 상태는 Post 객체로 이루어진 배열
export type IPostState = IPost[];

export interface ILoading {
  loading: boolean;
}
