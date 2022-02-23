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
      <span>{post.title}</span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}

export default PostItem;
