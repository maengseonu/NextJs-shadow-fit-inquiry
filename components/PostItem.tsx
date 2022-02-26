import Link from "next/link";
import React from "react";
import { IPost } from "../redux/types";

type PostItemProps = {
  post: IPost;
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
