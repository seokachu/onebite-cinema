import AllMoviesList from "@/components/AllMoviesList";
import SearchableLayout from "@/components/layout/SearchableLayout";
import RecommendedMoviesList from "@/components/RecommendedMoviesList";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-reco-movies";
import { InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("🚀 ~ recoMovies:", recoMovies);
  console.log(allMovies);

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
