import globalStyle from "../components/layout/global-layout.module.css";
import style from "./recommended-movies-list.module.css";
import RecommendedMoviesListItem from "./RecommendedMoviesListItem";
import movieData from "../mock/dummy.json";

export default function RecommendedMoviesList() {
  //처음 3개만 보여주기 (api 받으면 수정 예정)
  const recommendedMovies = movieData.slice(0, 3);

  return (
    <section className={globalStyle.container}>
      <h2 className={style.title}>지금 가장 추천하는 영화</h2>
      <ul className={style.recommend_list}>
        {recommendedMovies.map((item) => (
          <RecommendedMoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
