import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { ReducerType } from "../redux/rootReducer";
import styled from "styled-components";
import Link from "next/link";
import Table from "../components/Table";
import axios from "axios";

function PostApp({ serverData }: any) {
  const posts = useSelector((state: ReducerType) => state.posts);

  // console.log(serverData);

  return (
    <>
      <Container>
        <PageTitle>게시판</PageTitle>
        <Link href="/add">
          <a>
            <AddPageBtn type="button" value="등록하기" />
          </a>
        </Link>
        {/* <PostList posts={posts} /> */}
        {/* <TestTable /> */}
        <Table serverData={serverData} />
      </Container>
    </>
  );
}

export default PostApp;

// 페이지 요청 시 자동으로 호출되며 비동기 요청으로 불러온 외부 데이터를 컴포넌트 속성으로 전달
export const getServerSideProps = async () => {
  try {
    const res = await axios.get("http://localhost:8080/posts");

    if (res.status === 200) {
      const serverData = res.data;
      return { props: { serverData } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

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

export const AddPageBtn = styled.input`
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  width: 70px;
  height: 30px;
  cursor: pointer;
`;
