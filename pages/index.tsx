// import { connect, useDispatch, useSelector } from "react-redux";
// import { ReducerType } from "../redux/post";

// function Home() {
//   return "ss";
// }

// const mapStateToProps = (state: any) => {
//   return {};
// };

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

// Custom
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostInsert from "../components/PostInsert";
import PostList from "../components/PostList";
import { addPost, removePost } from "../redux/post";
import { ReducerType } from "../redux/rootReducer";

function PostApp() {
  const posts = useSelector((state: ReducerType) => state.posts);
  const dispatch = useDispatch();

  const onInsert = (title: string, text: string) => {
    dispatch(addPost(title, text));
  };

  const onRemove = (id: number) => {
    dispatch(removePost(id));
  };

  return (
    <>
      <PostInsert onInsert={onInsert} />
      <PostList posts={posts} onRemove={onRemove} />
    </>
  );
}

export default PostApp;
