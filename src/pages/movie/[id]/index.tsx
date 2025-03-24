import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  const { id } = query;

  return <h1>영화 상세 페이지 번호 : {id} </h1>;
}
