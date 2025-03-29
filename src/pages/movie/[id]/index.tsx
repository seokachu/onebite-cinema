import Image from "next/image";
import globalStyle from "../../../components/layout/global-layout.module.css";
import style from "./[id].module.css";
import { InferGetServerSidePropsType } from "next";
import { getMovieDetailProps } from "@/lib/get-movie-detail-props";

export const getServerSideProps = getMovieDetailProps;

export default function Page({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!movie)
    return (
      <h3 className={globalStyle.empty}>
        문제가 발생했습니다. 다시 시도해 주세요🥲
      </h3>
    );

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
    <section className={style.container}>
      <div
        className={style.img_inner}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <Image src={posterImgUrl} alt={title} width={300} height={450} />
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
