import Image from "next/image";
import globalStyle from "../../../components/layout/global-layout.module.css";
import style from "./[id].module.css";
import { InferGetStaticPropsType } from "next";
import {
  getMovieDetailProps,
  getStaticPaths,
} from "@/lib/get-movie-detail-props";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";

export { getStaticPaths };
export const getStaticProps = getMovieDetailProps;

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback, query } = useRouter();

  // Loading 처리
  if (isFallback)
    return <div className={globalStyle.empty}>로딩 중 입니다...!</div>;

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

  //NOTE - meta tag
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/movies/${query.id}`;

  return (
    <>
      <Meta
        title={`한입 시네마 - ${title}`}
        description={description}
        image={posterImgUrl}
        url={url}
      />
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
    </>
  );
}
