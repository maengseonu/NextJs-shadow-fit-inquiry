import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPost } from "../redux/types";
import PostItem from "./PostItem";

type PostListProps = {
  posts: IPost[];
};

interface IPostData {
  id: number;
  create: string;
  title: string;
  text: string;
}

function PostList({ posts }: PostListProps) {
  const [postsData, setPostsData] = useState<IPostData[]>([]);

  // db에서 데이터 가져오기
  async function getResult() {
    try {
      const result = await axios.get("http://localhost:8080/posts");
      console.log(`PostListAxios.get : ${result.data}`);
      setPostsData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  // state가 바뀔 때 마다 새로운 데이터 가져오기
  useEffect(() => {
    getResult();
  }, [posts]);

  // if (postsData.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <ul>
      {postsData.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default PostList;
