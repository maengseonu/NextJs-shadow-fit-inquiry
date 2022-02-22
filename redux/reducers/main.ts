import { AnyAction } from "redux";
import * as t from "../types";

// export const initialState = {
//   posts: [
//     {
//       postId: 1,
//       postCreatedAt: 1,
//       postTitle: "테스트 제목",
//       postContent: "테스트 내용",
//     },
//   ],
//   lastId: 5,
//   selectRowData: {},
// };

export const save_post = () => ({
  type: t.SAVE_POST,
});

type PostAction = ReturnType<typeof save_post>;

type postState = {
  postId: number;
  postCreatedAt: number;
  postTitle: string;
  postContent: string;
};

const initialState: postState = {
  postId: 1,
  postCreatedAt: 1,
  postTitle: "테스트 제목",
  postContent: "테스트 내용",
};

export const postReducer = (
  state: postState = initialState,
  action: PostAction
) => {
  switch (action.type) {
    case t.SAVE_POST:
      return { postTitle: state.postTitle + "aa" };
    default:
      return { state };
  }
};
