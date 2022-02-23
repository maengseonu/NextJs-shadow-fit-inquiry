import Link from "next/link";
import React from "react";
import { Post } from "../redux/post";
import PostItem from "./PostItem";

type PostListProps = {
  posts: Post[];
  onRemove: (id: number) => void;
};

function PostList({ posts, onRemove }: PostListProps) {
  if (posts.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} onRemove={onRemove} key={post.id} />
      ))}
    </ul>
  );
}

export default PostList;
