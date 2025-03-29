import { GetServerSidePropsContext } from "next";
import fetchMovies from "./fetch-movies";

export const getSearchProps = async (context: GetServerSidePropsContext) => {
  const { q } = context.query;
  const movies = await fetchMovies(q as string);

  return {
    props: {
      movies,
    },
  };
};
