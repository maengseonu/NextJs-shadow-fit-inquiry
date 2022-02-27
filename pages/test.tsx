import axios from "axios";
import { instance } from "../api";

// 데이터 불러오는 함수
export const fetchData = async (url: any) => {
  const query = await axios.get(url);
  return await query.data;
};

export const getStaticProps = async () => {
  const data = await fetchData("http://localhost:8080/posts");
  return {
    props: {
      data,
    },
  };
};

const Test = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <article>
        <h1>HealthCare.gov Articles</h1>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((post: any) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.create}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </article>
    </>
  );
};

export default Test;
