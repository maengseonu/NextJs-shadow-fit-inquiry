import axios from "axios";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { Container, PageTitle } from "../pages";
import { HomePageBtn } from "../pages/posts/[id]";
import { getToday, setID } from "./components";

type PostInsertProps = {
  onInsert: (title: string, text: string) => void;
};

function PostInsert({ onInsert }: PostInsertProps) {
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  async function postData() {
    try {
      if (titleValue && textValue !== "") {
        const response = await axios.post("http://localhost:8080/posts", {
          id: setID(),
          create: getToday(),
          title: titleValue,
          text: textValue,
        });
        console.log(response);
        history.back(); // 뒤로가기
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(titleValue, textValue);
    setTitleValue("");
    setTextValue("");
  };

  return (
    <Container>
      <PageTitle>게시글 작성</PageTitle>
      <form onSubmit={onSubmit}>
        <Form>
          <input
            required
            placeholder="제목을 입력하세요"
            value={titleValue}
            onChange={onChangeTitle}
          />
          <input
            required
            placeholder="내용을 입력하세요"
            value={textValue}
            onChange={onChangeText}
          />
          <BtnContainer>
            <Link href="/">
              <a>
                <HomePageBtn type="button" value="목록" />
              </a>
            </Link>
            <HomePageBtn
              type="submit"
              value="등록"
              onClick={() => postData()}
            />
          </BtnContainer>
        </Form>
      </form>
    </Container>
  );
}

export default PostInsert;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
