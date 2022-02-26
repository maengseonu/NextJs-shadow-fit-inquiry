import axios from "axios";
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

interface IPostData {
  id: number;
  create: string;
  title: string;
  text: string;
}

export default function Detail({ detailData }: any) {
  const [postData, setPostData] = useState<IPostData>();
  const router = useRouter();
  const dispatch = useDispatch();
  const detailId = router.query.id; // 이 아이디와 일치하는 데이터를 get해서 가져온다
  console.log(router);

  // 수정 누르면 현재 url id값의 수정페이지로 이동
  const onClickEdit = (id: any) => {
    router.push(`/edit/${id}`);
  };

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
  }, []);

  return (
    <>
      <Container>
        <PageTitle>게시글</PageTitle>
        <PostTitle>{postData?.title}</PostTitle>
        <PostText>{postData?.text}</PostText>
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
const PostTitle = styled.div`
  width: 30%;
  border: 1px solid gray;
  margin-top: 50px;
  font-size: 30px;
  padding: 10px;
  border-radius: 5px;
`;

const PostText = styled.p`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  height: 400px;
  overflow: auto;
  width: 30%;
  word-wrap: break-word;
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: skyblue;
  }
  ::-webkit-scrollbar {
    scrollbar-width: thin;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 5px;
  }
`;
