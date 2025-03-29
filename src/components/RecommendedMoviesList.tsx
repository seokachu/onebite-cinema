import globalStyle from "../components/layout/global-layout.module.css";
import style from "./movies-list.module.css";
import MoviesListItem from "./MoviesListItem";
import type { MoviesListProps } from "@/types";

export default function RecommendedMoviesList({ movies }: MoviesListProps) {
  return (
    <section className={globalStyle.container}>
      <h2 className={style.title}>지금 가장 추천하는 영화</h2>
      <ul className={style.recommend_list}>
        {movies.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
