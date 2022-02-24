import axios from "axios";
import Link from "next/link";
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

  async function deleteData() {
    try {
      const response = await axios.delete(
        `http://localhost:8080/posts/${post.id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemove = () => {
    deleteData();
    onRemove(post.id);
  };

  return (
    <li key={post.id}>
      <Link href={`/${post.id}`}>
        <a>
          <span>{post.title}</span>
        </a>
      </Link>
      <span> - </span>
      <span>{post.create}</span>
      <button onClick={handleRemove} style={removeStyle}>
        삭제
      </button>
    </li>
  );
}

export default PostItem;
