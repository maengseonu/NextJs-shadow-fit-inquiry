import { AnyAction } from "redux";
import * as t from "../types";

export const main = (
  state = {
    name: "guest",
  },
  action: AnyAction
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return { ...state };
  }
};

export const initialState = {
  posts: [
    {
      postId: 1,
      postCreatedAt: 1,
      postTitle: "",
      postContent: "",
    },
  ],
  lastId: 1,
  selectRowData: {},
};

export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case t.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((row) => row.postId !== action.postid),
      };
    case t.SAVE_POST:
      if (action.inputData.postId === "") {
        return {
          lastId: state.lastId + 1,
          posts: state.posts.concat({
            ...action.inputData,
            postId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      } else {
        return {
          ...state,
          posts: state.posts.map((data) =>
            data.postId === action.inputData.postId
              ? { ...action.inputData }
              : data
          ),
          selectRowData: {},
        };
      }
    case t.SELECT_POST:
      return {
        ...state,
        selectRowData: state.posts.find((row) => row.postId === action.postId),
      };
    default:
      return { ...state };
  }
};
