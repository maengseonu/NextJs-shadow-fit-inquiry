import { AnyAction } from "redux";
import * as t from "../types";

const main = (
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

export default main;
