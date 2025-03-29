import globalStyle from "../components/layout/global-layout.module.css";
import style from "./movies-list.module.css";
import MoviesListItem from "./MoviesListItem";
import type { MoviesListProps } from "@/types";

export default function AllMoviesList({ movies }: MoviesListProps) {
  return (
    <section className={globalStyle.container}>
      <h2 className={style.title}>등록된 모든 영화</h2>
      <ul className={style.all_movie_list}>
        {movies.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
