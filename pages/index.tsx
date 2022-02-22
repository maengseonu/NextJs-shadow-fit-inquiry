import React, { ReactEventHandler, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { postDelete, postSave, postSelectRow } from "../redux/actions/main";
import { postReducer } from "../redux/reducers/main";
import { ReducerType } from "../redux/reducers/rootReducer";

function Home(props: any) {
  const { postSave, postTitle, postContent } = props;
  const [newTitle, setTitle] = useState("");
  const [newContents, setContents] = useState("");

  // State
  const [inputData, setInputData] = useState({
    postId: 1,
    postCreatedAt: 1,
    postTitle: newTitle,
    postContent: newContents,
  });

  // 함수형 컴포넌트에서 dispatch 를 사용할 수 있게 해줌
  const dispatch = useDispatch();

  // reducer state 의 selectRowData field 를 가져온 뒤 subscribe(구독)
  const { selectRowData } = useSelector(
    (state: ReducerType) => state.postReducer
  );

  // onDelete 와 onSave 는 Action 을 dispatch 하는 함수
  const onDelete = (postId: number) => dispatch(postDelete(postId));

  const onSave = (saveData: {
    postId: number;
    postCreatedAt: number;
    postTitle: string;
    postContent: string;
  }) => dispatch(postSave(saveData));

  const resetForm = () => {
    setInputData({
      postId: 1,
      postCreatedAt: 1,
      postTitle: "",
      postContent: "",
    });
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const saveBtnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(inputData);
    resetForm();
  };

  // User Function
  return (
    <div>
      {/* <p>제목 : {postTitle}</p>
      <p>내용 : {newContents}</p> */}
      <form onSubmit={saveBtnClick}>
        <input
          type="text"
          name="postTitle"
          value={inputData.postTitle}
          onChange={changeInput}
        ></input>
        <input
          type="text"
          name="postContent"
          value={inputData.postContent}
          onChange={changeInput}
        ></input>
        <input type="submit" value="게시"></input>
      </form>
      <span>제목: {inputData.postTitle}</span>
    </div>
  );
}

const mapStateToProps = (state: ReducerType) => {
  return { postTitle: state.postReducer };
};

const mapDispatchToProps = {
  postSave,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
