import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Container, PageTitle } from "..";

interface IPostData {
  id: number;
  create: string;
  title: string;
  text: string;
}

export default function Edit() {
  const [editData, setEditData]: any = useState();
  const router = useRouter();
  const editId = router.query.id;

  const onChangeEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData(e.target.value);
  };
  const onChangeEditText = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData(e.target.value);
  };

  async function getResult() {
    try {
      const result = await axios.get(`http://localhost:8080/posts/${editId}`);
      console.log(result.data);
      setEditData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function putData() {
    try {
      const put = await axios.put(`http://localhost:8080/posts/${editId}`, {
        create: editData.create,
        title: editData.title,
        text: editData.text,
      });
      console.log(put);
    } catch (error) {
      console.log(error);
    }
  }

  // 수정 누르면 데이터 업데이트하고 상세페이지로
  const onClickEdit = () => {
    putData();
    router.push(`/posts/${editId}`);
  };

  useEffect(() => {
    getResult();
  }, [router]);

  return (
    <>
      <Container>
        <PageTitle>수정</PageTitle>
        <input
          type="text"
          name="title"
          onChange={onChangeEditTitle}
          value={editData?.title}
        ></input>
        <input
          type="text"
          name="text"
          onChange={onChangeEditText}
          value={editData?.text}
        ></input>
        <input type="submit" onClick={onClickEdit} />
      </Container>
    </>
  );
}
