import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostInsert from "../components/PostInsert";
import PostList from "../components/PostList";
import { addPost, removePost } from "../redux/post";
import { ReducerType } from "../redux/rootReducer";
import styled from "styled-components";
import Link from "next/link";

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
      <Container>
        <PageTitle>게시판</PageTitle>
        <Link href="/AddPage">
          <a>
            <AddPageBtn type="button" value="등록하기" />
          </a>
        </Link>
        <PostInsert onInsert={onInsert} />
        <PostList posts={posts} onRemove={onRemove} />
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

export const PageTitle = styled.span`
  font-size: 50px;
`;

const AddPageBtn = styled.input`
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  width: 70px;
  height: 30px;
  cursor: pointer;
`;

export default PostApp;
