import SearchableLayout from "@/components/layout/SearchableLayout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import movieData from "@/mock/dummy.json";
import MoviesListItem from "@/components/MoviesListItem";
import style from "../../components/movies-list.module.css";
import globalStyle from "../../components/layout/global-layout.module.css";
import type { MovieData } from "@/types";

export default function Page() {
  const { query } = useRouter();
  const { q } = query;
  const [search, setSearch] = useState<MovieData[]>([]);

  useEffect(() => {
    if (q) {
      const searchResult = String(q).toLowerCase().trim();
      const movie = movieData.filter((item) =>
        item.title.toLowerCase().includes(searchResult)
      );
      setSearch(movie);
    } else {
      setSearch([]);
    }
  }, [q]);

  return (
    <div className={globalStyle.container}>
      {search.length > 0 ? (
        <ul className={style.recommend_list}>
          {search.map((item) => (
            <MoviesListItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h3 className={globalStyle.empty}>검색 결과가 없습니다.</h3>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
