import fetchMovies from "./fetch-movies";
import fetchRandomMovies from "./fetch-reco-movies";

export const getHomePageProps = async () => {
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
