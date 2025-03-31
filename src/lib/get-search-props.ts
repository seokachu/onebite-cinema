import fetchMovies from "./fetch-movies";

export const getSearchProps = async () => {
  const movies = await fetchMovies();

  return {
    props: {
      movies,
    },
  };
};
