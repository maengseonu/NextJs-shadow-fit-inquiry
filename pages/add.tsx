import { useDispatch } from "react-redux";
import PostInsert from "../components/PostInsert";
import { addPost } from "../redux/actions/posts";

function AddPage() {
  const dispatch = useDispatch();
  const onInsert = (title: string, text: string) => {
    dispatch(addPost(title, text));
  };
  return <PostInsert onInsert={onInsert} />;
}

export default AddPage;
