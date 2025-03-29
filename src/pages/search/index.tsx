import SearchableLayout from "@/components/layout/SearchableLayout";
import { ReactNode } from "react";
import MoviesListItem from "@/components/MoviesListItem";
import style from "../../components/movies-list.module.css";
import globalStyle from "../../components/layout/global-layout.module.css";
import { InferGetServerSidePropsType } from "next";
import { getSearchProps } from "@/lib/get-search-props";

export const getServerSideProps = getSearchProps;

export default function Page({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
