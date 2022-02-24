import axios from "axios";
import Link from "next/link";
import React, { CSSProperties } from "react";
import { Post } from "../redux/post";

type PostItemProps = {
  post: Post;
  onRemove: (id: number) => void;
};

function PostItem({ post, onRemove }: PostItemProps) {
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
      <Link href={`/posts/${post.id}`}>
        <a>
          <span>{post.title}</span>
        </a>
      </Link>
      <span> - </span>
      <span>{post.create}</span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}

export default PostItem;
