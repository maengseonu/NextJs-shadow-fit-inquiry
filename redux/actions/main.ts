import * as t from "../types";

export const setInfo = (name: string) => (dispatch: any) => {
  dispatch({
    type: t.SET_NAME, // 타입 스크립트
    payload: name, // 전송되는 데이터
  });
};

// action은 중앙 저장소에 저장된 state에 “무슨” 동작을 할 것이지 적어놓는 객체입니다.
// action에는 type이 필수로 필요합니다.
// type은 공식문서에 나와있는 방법으로 작성하는 것을 권장합니다.
