import axios from "axios";
import { useDispatch } from "react-redux";
import { GLOBAL_LOADED, GLOBAL_LOADING } from "./redux/types";

export const instance = axios.create({
  baseURL: "http://localhost:8080/",
});

const API = () => {
  const dispatch = useDispatch();

  instance.interceptors.request.use(
    function (config) {
      // 로딩 호출
      dispatch({
        type: GLOBAL_LOADING,
      });
      return config;
    },
    function (error) {
      // 실패 시 로딩창 종료
      dispatch({
        type: GLOBAL_LOADED,
      });
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (config) => {
      // 완료 시 로딩창 종료
      dispatch({
        type: GLOBAL_LOADED,
      });
      return config;
    },
    (error) => {
      // 실패 시 로딩창 종료
      dispatch({
        type: GLOBAL_LOADED,
      });
      return Promise.reject(error);
    }
  );
};

export default API;
