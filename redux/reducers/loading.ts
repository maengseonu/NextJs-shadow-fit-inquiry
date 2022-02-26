import { AnyAction } from "@reduxjs/toolkit";
import { GLOBAL_LOADED, GLOBAL_LOADING, ILoading } from "../types";

const initialState: ILoading = {
  loading: false,
};

function reducerLoading(
  state: ILoading = initialState,
  action: AnyAction
): any {
  switch (action.type) {
    case GLOBAL_LOADING:
      return (state.loading = true);
    case GLOBAL_LOADED: {
      return (state.loading = false);
    }
    default:
      return state;
  }
}

export default reducerLoading;
