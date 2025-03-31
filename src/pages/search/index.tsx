import SearchableLayout from "@/components/layout/SearchableLayout";
import { ReactNode, useEffect, useState } from "react";
import MoviesListItem from "@/components/MoviesListItem";
import style from "../../components/movies-list.module.css";
import globalStyle from "../../components/layout/global-layout.module.css";
import { InferGetStaticPropsType } from "next";
import { getSearchProps } from "@/lib/get-search-props";
import { useRouter } from "next/router";
import { searchMovies } from "@/utils/search-movies";
import { MovieData } from "@/types";

export const getStaticProps = getSearchProps;

export default function Page({
  movies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { query } = useRouter();
  const q = query.q as string;
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    if (q) {
      const result = searchMovies(movies, q);
      setFilteredMovies(result);
    } else {
      setFilteredMovies([]);
    }
  }, [q, movies]);

  return (
    <div className={globalStyle.container}>
      {filteredMovies.length > 0 ? (
        <ul className={style.recommend_list}>
          {filteredMovies.map((item) => (
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
