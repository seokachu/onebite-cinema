import type { MovieData } from "@/types";

export default async function fetchMovies(q?: string): Promise<MovieData[]> {
  let url = `http://localhost:12345/movie`;

  //NOTE - 검색 부분 SSG 방식에서는 필요없으나, 일단 코드 변경하지 않음
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
  }
  return [];
}
