import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  const { q } = query;

  return <h1>검색 결과 : {q}</h1>;
}
