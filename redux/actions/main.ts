import * as t from "../types";

export const postSave = (inputData: {
  postId: number;
  postCreatedAt: number;
  postTitle: string;
  postContent: string;
}) => ({
  type: t.SAVE_POST,
  inputData: {
    postId: inputData.postId,
    postCreatedAt: inputData.postCreatedAt,
    postTitle: inputData.postTitle,
    postContent: inputData.postContent,
  },
});

export const postDelete = (postId: number) => ({
  type: t.DELETE_POST,
  postId,
});

export const postSelectRow = (postId: number) => ({
  tpye: t.SELECT_POST,
  postId,
});

// action은 중앙 저장소에 저장된 state에 “무슨” 동작을 할 것이지 적어놓는 객체입니다.
// action에는 type이 필수로 필요합니다.
// type은 공식문서에 나와있는 방법으로 작성하는 것을 권장합니다.
