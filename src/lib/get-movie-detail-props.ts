import { GetStaticPropsContext } from "next";
import fetchOneMovie from "./fetch-one-movies";
import fetchMovies from "./fetch-movies";

export const getStaticPaths = async () => {
  const movies = await fetchMovies();
  const paths = movies.map((item) => ({ params: { id: String(item.id) } }));
  return {
    paths,
    fallback: true,
  };
};

export const getMovieDetailProps = async (context: GetStaticPropsContext) => {
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
