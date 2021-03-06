import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Table from "../components/Table";
import { instance } from "../api";
import { AddPageBtn } from "../components/styles/BtnStyles";
import { culturitRogo } from "../components/styles/ImgSrc";
import { useRouter } from "next/router";
import Seo from "../components/common/Seo";

// 서버에서 미리 렌더링시 자동으로 호출되며 비동기 요청으로 불러온 외부 데이터를 컴포넌트 속성으로 전달
export const getServerSideProps = async () => {
  try {
    const res = await instance.get("posts");
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

function PostApp({ serverData }: any) {
  return (
    <>
      <Seo title="컬처릿 게시판" />
      <Container>
        <div>
          <Logo src={culturitRogo} width={50} height={50} />
          <PageTitle>컬처릿 게시판</PageTitle>
        </div>
        <Link href="/add">
          <a>
            <AddPageBtn type="button" value="등록하기" />
          </a>
        </Link>
        <Table serverData={serverData} />
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
  margin-top: 20px;
`;

export const PageTitle = styled.span`
  font-size: 50px;
  margin-left: 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: -15px;
`;
