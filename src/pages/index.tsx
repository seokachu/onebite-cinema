import SearchableLayout from "@/components/search/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return <section style={{ marginTop: "15px" }}>메인 섹션 페이지</section>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
