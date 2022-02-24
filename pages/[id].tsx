import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, PageTitle } from ".";

interface IPostData {
  id: number;
  create: string;
  title: string;
  text: string;
}

export default function Detail() {
  const [postData, setPostData] = useState<IPostData>();
  const router = useRouter();
  const detailId = router.query.id;
  console.log(detailId); // 이 아이디와 일치하는 데이터를 get해서 가져온다

  // url의 id와 post의 id가 일치하는 데이터 가져오기
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getResult() {
    try {
      const result = await axios.get(`http://localhost:8080/posts/${detailId}`);
      console.log(result.data);
      setPostData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResult();
  }, [router]);

  return (
    <>
      <Container>
        <PageTitle>상세 페이지</PageTitle>
        <PostTitle>{postData?.title}</PostTitle>
        <PostText>{postData?.text}</PostText>
        <Link href="/">
          <a>
            <HomePageBtn type="button" value="목록"></HomePageBtn>
          </a>
        </Link>
      </Container>
    </>
  );
}

const PostTitle = styled.div`
  margin-top: 50px;
  font-size: 30px;
`;

const PostText = styled.div`
  border-radius: 10px;
  padding: 5px;
  border: 1px solid black;
  width: 24%;
  height: 24%;
  margin-top: 50px;
`;

const HomePageBtn = styled.input`
  margin-top: 10px;
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  cursor: pointer;
`;
