import axios from "axios";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Container, PageTitle } from "../pages";
import { getToday, setID } from "./components";
import { AddBtn, BtnContainer, HomePageBtn } from "./styles/BtnStyles";
import {
  FormContainer,
  FormLabel,
  FormRow,
  FormTextInput,
  FormTitleInput,
  InputDiv,
  LabelDiv,
} from "./styles/InputStyle";

type PostInsertProps = {
  onInsert: (title: string, text: string) => void;
};

function PostInsert({ onInsert }: PostInsertProps) {
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  const onChangeText = (e: any) => {
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
      <FormContainer>
        <form onSubmit={onSubmit}>
          <FormRow>
            <LabelDiv>
              <FormLabel>제목</FormLabel>
            </LabelDiv>
            <InputDiv>
              <FormTitleInput
                maxLength={10}
                required
                placeholder="제목을 입력하세요"
                value={titleValue}
                onChange={onChangeTitle}
                autoFocus
              />
            </InputDiv>
          </FormRow>
          <FormRow>
            <LabelDiv>
              <FormLabel>내용</FormLabel>
            </LabelDiv>
            <InputDiv>
              <FormTextInput
                required
                placeholder="내용을 입력하세요"
                value={textValue}
                onChange={onChangeText}
              />
            </InputDiv>
          </FormRow>
          <BtnContainer>
            <Link href="/">
              <a>
                <HomePageBtn type="button" value="목록" />
              </a>
            </Link>
            <AddBtn type="submit" value="등록" onClick={() => postData()} />
          </BtnContainer>
        </form>
      </FormContainer>
    </Container>
  );
}

export default PostInsert;
