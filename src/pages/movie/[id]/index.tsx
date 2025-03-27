import Image from "next/image";
import { useRouter } from "next/router";
import movieData from "@/mock/dummy.json";
import globalStyle from "../../../components/layout/global-layout.module.css";
import style from "./[id].module.css";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const movieId = parseInt(id as string);
  const movie = movieData.find((item) => item.id === movieId);

  if (!movie)
    return <h3 className={globalStyle.empty}>영화를 찾을 수 없습니다🥲</h3>;

  const {
    posterImgUrl,
    title,
    releaseDate,
    genres,
    runtime,
    company,
    subTitle,
    description,
  } = movie;

  return (
    <section>
      <div
        className={style.img_inner}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <Image src={posterImgUrl} alt={title} width={300} height={300} />
      </div>
      <div className={style.movie_info}>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.info_list}>
          <li>{releaseDate}</li>
          <li>{genres.join(", ")}</li>
          <li>{runtime}분</li>
        </ul>
        <p className={style.company}>{company}</p>
      </div>
      <div className={style.movie_description}>
        {subTitle && <h3>&ldquo;{subTitle}&rdquo;</h3>}
        <p>{description}</p>
      </div>
    </section>
  );
}
