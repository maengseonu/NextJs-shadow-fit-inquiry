import axios from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const oAuthURL =
  "https://accounts.google.com/o/oauth2/v2/auth?client_id=927559714739-f359jhe6a7rjud0g4ck9mh5dv5ppjkbh.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/&scope=email%20profile&";

function Login() {
  const [data, setData] = useState();
  const router = useRouter();

  return (
    <>
      <button>google</button>
    </>
  );
}

export default Login;

// export const getServerSideProps = async (context: any) => {
//   try {
//     const api = "http://localhost:3000/";
//     const token = context.data;
//     const res = await axios.get(api);
//     return console.log(res);
//   } catch (e) {
//     (e: any) => console.log(e);
//   }
// };
