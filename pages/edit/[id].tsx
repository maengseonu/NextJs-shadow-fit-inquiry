import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Container, PageTitle } from "..";
import { instance } from "../../api";
import {
  BtnContainer,
  EditBtn,
  HomePageBtn,
} from "../../components/styles/BtnStyles";
import {
  FormContainer,
  FormLabel,
  FormRow,
  FormTextInput,
  FormTitleInput,
  InputDiv,
  LabelDiv,
} from "../../components/styles/InputStyle";

// export interface IPostData {
//   id: number;
//   create: string;
//   title: string;
//   text: string;
// }

export default function Edit() {
  const [editTitle, setEditTitle]: any = useState();
  const [editText, setEditText]: any = useState();
  const router = useRouter();
  const editId = router.query.id;

  const onChangeEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };
  const onChangeEditText = (e: any) => {
    setEditText(e.target.value);
  };

  //  db 게시글 데이터 가져오기
  async function getResult() {
    try {
      const result = await axios.get(`http://localhost:8080/posts/${editId}`);
      setEditTitle(result.data.title);
      setEditText(result.data.text);
    } catch (error) {
      console.log(error);
    }
  }

  // db 게시글 데이터 업데이트
  async function putData() {
    try {
      const put = await axios.patch(`http://localhost:8080/posts/${editId}`, {
        title: editTitle,
        text: editText,
      });
      console.log(put);
    } catch (error) {
      console.log(error);
    }
  }

  // 데이터 업데이트하고 상세페이지로
  const onSubmitEdit = () => {
    if (window.confirm("수정하시겠습니까?")) {
      putData();
      router.push(`/posts/${editId}`);
    } else {
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <Container>
        <PageTitle>게시글 수정</PageTitle>
        <FormContainer>
          <form>
            <FormRow>
              <LabelDiv>
                <FormLabel>제목</FormLabel>
              </LabelDiv>
              <InputDiv>
                <FormTitleInput
                  required
                  maxLength={10}
                  name="title"
                  onChange={onChangeEditTitle}
                  value={editTitle}
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
                  name="text"
                  value={editText}
                  onChange={onChangeEditText}
                />
              </InputDiv>
            </FormRow>
            <BtnContainer>
              <Link href={`/posts/${editId}`}>
                <a>
                  <HomePageBtn type="button" value="목록" />
                </a>
              </Link>
              <EditBtn type="button" value="수정" onClick={onSubmitEdit} />
            </BtnContainer>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}
