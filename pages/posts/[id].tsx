import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container, PageTitle } from "..";
import { instance } from "../../api";
import {
  BtnContainer,
  DeleteBtn,
  EditBtn,
  HomePageBtn,
} from "../../components/styles/BtnStyles";
import { removePost } from "../../redux/actions/posts";

export interface IPostData {
  id: number;
  create: string;
  title: string;
  text: string;
}

export default function Detail({ detailData }: any) {
  const [postData, setPostData] = useState<IPostData>();
  const router = useRouter();
  const dispatch = useDispatch();
  const detailId = detailData.id; // 이 아이디와 일치하는 데이터를 get해서 가져온다
  console.log(detailId);

  // 현재 url id값의 수정페이지로 이동
  const onClickEdit = (id: any) => {
    router.push(`/edit/${id}`);
  };

  // 현재 url id값과 일치하는 스테이트 게시글 삭제
  const onRemove = (id: any) => {
    dispatch(removePost(id));
  };

  // 현재 url id값과 일치하는 db 게시글 삭제
  async function deleteData() {
    try {
      const response = await instance.delete(`posts/${detailId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemove = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteData();
      onRemove(detailId);
      router.push("/");
      alert("삭제되었습니다");
    } else {
    }
  };

  useEffect(() => {
    setPostData(detailData);
  }, [detailData]);

  return (
    <>
      <Container>
        <PageTitle>게시글</PageTitle>
        <DetailContainer>
          <Create>{postData?.create}</Create>
          <PostName>제목</PostName>
          <PostTitle>{postData?.title}</PostTitle>
          <PostName>내용</PostName>
          <PostText>{postData?.text}</PostText>
        </DetailContainer>
        <BtnContainer>
          <Link href="/">
            <a>
              <HomePageBtn type="button" value="목록"></HomePageBtn>
            </a>
          </Link>
          <DeleteBtn type="button" value="삭제" onClick={handleRemove} />
          <EditBtn
            type="button"
            value="수정"
            onClick={() => onClickEdit(detailId)}
          />
        </BtnContainer>
      </Container>
    </>
  );
}

// 현재 게시글의 데이터 받아오기
export const getServerSideProps = async (context: any) => {
  try {
    const id = context.params.id;
    const res = await instance.get(`posts/${id}`);
    if (res.status === 200) {
      const detailData = res.data;
      return { props: { detailData } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

// 게시글 페이지 styles
const PostName = styled.div`
  width: 60%;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 1000;
`;

const Create = styled.span`
  font-size: 20px;
`;

const PostTitle = styled.div`
  width: 60%;
  border: 1px solid #ccc;
  margin-top: 15px;
  font-size: 25px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
`;

const PostText = styled.p`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 400px;
  overflow: auto;
  width: 60%;
  background-color: white;
  word-wrap: break-word;
  /* ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: skyblue;
  }
  ::-webkit-scrollbar {
    scrollbar-width: thin;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 5px; */
  /* } */
`;

export const DetailContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  border-radius: 5px;
  margin-top: 25px;
  background-color: #f2f2f2;
`;
