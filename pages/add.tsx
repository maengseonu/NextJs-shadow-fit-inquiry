import { useDispatch } from "react-redux";
import Seo from "../components/common/Seo";
import PostInsert from "../components/PostInsert";
import { addPost } from "../redux/actions/posts";

function AddPage() {
  const dispatch = useDispatch();
  const onInsert = (title: string, text: string) => {
    dispatch(addPost(title, text));
  };
  return (
    <>
      <Seo title="게시글 작성" />
      <PostInsert onInsert={onInsert} />;
    </>
  );
}

export default AddPage;
