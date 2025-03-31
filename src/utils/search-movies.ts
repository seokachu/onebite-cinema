import type { MovieData } from "@/types";

export function searchMovies(movies: MovieData[], search: string): MovieData[] {
  if (!search || search.trim() === "") return [];

  const trimmedSearch = search.trim().toLowerCase();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(trimmedSearch)
  );

  return filteredMovies;
}
