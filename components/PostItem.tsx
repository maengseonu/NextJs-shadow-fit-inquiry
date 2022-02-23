import React, { CSSProperties } from "react";
import { Post } from "../redux/post";

type PostItemProps = {
  post: Post;
  onRemove: (id: number) => void;
};

function PostItem({ post, onRemove }: PostItemProps) {
  // CSSProperties 는 style 객체의 타입입니다.
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: "red",
  };

  const handleRemove = () => {
    onRemove(post.id);
  };

  return (
    <li>
      <span>{post.title}</span>---<span>{post.text}</span>---
      <span>{post.create}</span>
      <button onClick={handleRemove} style={removeStyle}>
        삭제
      </button>
    </li>
  );
}

export default PostItem;
