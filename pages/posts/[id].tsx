import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container, PageTitle } from "..";
import { BtnContainer } from "../../components/PostInsert";
import { removePost } from "../../redux/post";

interface IPostData {
  id: number;
  create: string;
  title: string;
  text: string;
}

export default function Detail() {
  const [postData, setPostData] = useState<IPostData>();
  const router = useRouter();
  const dispatch = useDispatch();
  const detailId = router.query.id; // 이 아이디와 일치하는 데이터를 get해서 가져온다
  console.log(router);

  // 수정 누르면 현재 url id값의 수정페이지로 이동
  const onClickEdit = (id: any) => {
    router.push(`/edit/${id}`);
  };

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

  const onRemove = (id: any) => {
    dispatch(removePost(id));
  };

  async function deleteData() {
    try {
      const response = await axios.delete(
        `http://localhost:8080/posts/${detailId}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemove = () => {
    deleteData();
    onRemove(detailId);
  };

  useEffect(() => {
    getResult();
  }, [router]);

  return (
    <>
      <Container>
        <PageTitle>상세 페이지</PageTitle>
        <PostTitle>{postData?.title}</PostTitle>
        <PostText>{postData?.text}</PostText>
        <BtnContainer>
          <Link href="/">
            <a>
              <HomePageBtn type="button" value="목록"></HomePageBtn>
            </a>
          </Link>
          <Link href="/">
            <a>
              <HomePageBtn type="button" value="삭제" onClick={handleRemove} />
            </a>
          </Link>
          <HomePageBtn
            type="button"
            value="수정"
            onClick={() => onClickEdit(detailId)}
          />
        </BtnContainer>
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

export const HomePageBtn = styled.input`
  margin-top: 10px;
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  cursor: pointer;
`;
