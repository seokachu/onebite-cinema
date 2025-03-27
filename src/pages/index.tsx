import AllMoviesList from "@/components/AllMoviesList";
import SearchableLayout from "@/components/layout/SearchableLayout";
import RecommendedMoviesList from "@/components/RecommendedMoviesList";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <RecommendedMoviesList />
      <AllMoviesList />
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
