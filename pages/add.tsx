import { useDispatch } from "react-redux";
import { Container } from ".";
import PostInsert from "../components/PostInsert";
import { addPost } from "../redux/post";

function AddPage() {
  const dispatch = useDispatch();
  const onInsert = (title: string, text: string) => {
    dispatch(addPost(title, text));
  };
  return (
    <>
      <Container>
        <PostInsert onInsert={onInsert} />
      </Container>
    </>
  );
}

export default AddPage;
