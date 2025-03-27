import SearchableLayout from "@/components/layout/SearchableLayout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import movieData from "@/mock/dummy.json";
import type { MovieData } from "@/types";
import RecommendedMoviesListItem from "@/components/RecommendedMoviesListItem";
import style from "../../components/recommended-movies-list.module.css";

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
    <>
      {search.length > 0 ? (
        <ul className={style.recommend_list}>
          {search.map((item) => (
            <RecommendedMoviesListItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
