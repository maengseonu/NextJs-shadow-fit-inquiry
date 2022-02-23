import React, { ChangeEvent, FormEvent, useState } from "react";

type PostInsertProps = {
  onInsert: (title: string, text: string) => void;
};

function PostInsert({ onInsert }: PostInsertProps) {
  const [titleValue, setTitleValue] = useState("");
  const [TextValue, setTextValue] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(titleValue, TextValue);
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
        value={TextValue}
        onChange={onChangeText}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default PostInsert;
