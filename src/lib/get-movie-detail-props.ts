import { GetServerSidePropsContext } from "next";
import fetchOneMovie from "./fetch-one-movies";

export const getMovieDetailProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
};
