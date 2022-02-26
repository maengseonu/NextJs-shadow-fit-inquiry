import { getToday, setID } from "../../components/components";
import { DELETE_POST, SAVE_POST } from "../types";

// 액션 생성 함수
export const addPost = (title: string, text: string) => ({
  type: SAVE_POST,
  payload: {
    id: setID(),
    create: getToday(),
    title,
    text,
  },
});

export const removePost = (id: number) => ({
  type: DELETE_POST,
  id,
});
