import { ReactNode } from "react";
import AllMoviesList from "@/components/AllMoviesList";
import SearchableLayout from "@/components/layout/SearchableLayout";
import RecommendedMoviesList from "@/components/RecommendedMoviesList";
import { getHomePageProps } from "@/lib/get-home-page-props";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = getHomePageProps;

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <RecommendedMoviesList movies={recoMovies} />
      <AllMoviesList movies={allMovies} />
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
