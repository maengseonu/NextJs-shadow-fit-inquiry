import { GLOBAL_LOADED, GLOBAL_LOADING } from "../types";

export const globalLoadding = (loading: boolean) => ({
  type: GLOBAL_LOADING,
  loading,
});

export const globalLoaded = (loading: boolean) => ({
  type: GLOBAL_LOADED,
  loading,
});
