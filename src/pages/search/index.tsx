import SearchableLayout from "@/components/layout/SearchableLayout";
import { ReactNode, useEffect, useState } from "react";
import MoviesListItem from "@/components/MoviesListItem";
import style from "../../components/movies-list.module.css";
import globalStyle from "../../components/layout/global-layout.module.css";
import { useRouter } from "next/router";
import { MovieData } from "@/types";
import fetchMovies from "@/lib/fetch-movies";

export default function Page() {
  const { query } = useRouter();
  const q = query.q as string;
  const [movies, setMovies] = useState<MovieData[]>([]);

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div className={globalStyle.container}>
      {movies.length > 0 ? (
        <ul className={style.recommend_list}>
          {movies.map((item) => (
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
