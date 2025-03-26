import SearchableLayout from "@/components/search/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const { query } = useRouter();
  const { q } = query;

  return <h1 style={{ marginTop: "15px" }}>검색 결과 : {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
