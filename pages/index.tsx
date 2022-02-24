import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { removePost } from "../redux/post";
import { ReducerType } from "../redux/rootReducer";
import styled from "styled-components";
import Link from "next/link";

function PostApp() {
  const posts = useSelector((state: ReducerType) => state.posts);

  return (
    <>
      <Container>
        <PageTitle>게시판</PageTitle>
        <Link href="/add">
          <a>
            <AddPageBtn type="button" value="등록하기" />
          </a>
        </Link>
        <PostList posts={posts} />
      </Container>
    </>
  );
}

export default PostApp;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
