import axios from "axios";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
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
      const response = await axios.post("http://localhost:8080/posts", {
        id: setID(),
        create: getToday(),
        title: titleValue,
        text: textValue,
      });
      console.log(response);
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
    <form onSubmit={onSubmit}>
      <input
        placeholder="제목을 입력하세요"
        value={titleValue}
        onChange={onChangeTitle}
      />
      <input
        placeholder="내용을 입력하세요"
        value={textValue}
        onChange={onChangeText}
      />
      <Link href="/">
        <a>
          <button type="submit" onClick={() => postData()}>
            등록
          </button>
        </a>
      </Link>
      <Link href="/">
        <a>
          <HomePageBtn type="button" value="목록"></HomePageBtn>
        </a>
      </Link>
    </form>
  );
}

export default PostInsert;
