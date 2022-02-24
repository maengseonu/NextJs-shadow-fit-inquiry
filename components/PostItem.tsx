import Link from "next/link";
import React from "react";
import { Post } from "../redux/post";

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  return (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <a>
          <span>{post.title}</span>
        </a>
      </Link>
      <span> - </span>
      <span>{post.create}</span>
    </li>
  );
}

export default PostItem;
