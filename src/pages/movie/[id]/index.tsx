import { useRouter } from "next/router";
import movieData from "@/mock/dummy.json";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const movieId = parseInt(id as string);
  const movie = movieData.find((item) => item.id === movieId);

  if (!movie) return <div>영화를 찾을 수 없습니다...</div>;

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
      <div>
        <Image src={posterImgUrl} alt={title} width={300} height={300} />
      </div>
      <h2>{title}</h2>
      <div>
        <span>{releaseDate}</span>
        <span>{genres.join(", ")}</span>
        <span>{runtime}분</span>
        <p>{company}</p>
      </div>
      <div>
        <h3>{subTitle}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
