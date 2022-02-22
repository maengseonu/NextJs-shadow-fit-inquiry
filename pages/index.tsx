import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  postDelete,
  postSave,
  postSelectRow,
  setInfo,
} from "../redux/actions/main";
import { postReducer } from "../redux/reducers/main";
import { ReducerType } from "../redux/reducers/rootReducer";

function Home(props: { name: any; setInfo: any }) {
  const { name, setInfo } = props;
  const [newTitle, setTitle] = useState("");
  const [newContents, setContents] = useState("");

  // State
  const [inputData, setInputData] = useState({
    postId: "",
    postCreatedAt: "",
    postTitle: "",
    postContent: "",
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

  // User Function

  return (
    <div>
      <p>제목 : {name}</p>
      <p>내용 : {newContents}</p>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        value={newContents}
        onChange={(e) => setContents(e.target.value)}
      ></input>
      <button onClick={() => setInfo(newTitle)}>게시</button>
    </div>
  );
}

const mapStateToProps = (state: { main: { name: any } }) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
