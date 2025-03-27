import Image from "next/image";
import type { RecommendedMoviesListItemProps } from "@/types";
import { useRouter } from "next/router";

export default function RecommendedMoviesListItem({
  item,
}: RecommendedMoviesListItemProps) {
  const { push } = useRouter();
  const { id, posterImgUrl, title } = item;

  const onClickDetail = () => {
    push(`movie/${id}`);
  };

  return (
    <li onClick={onClickDetail}>
      <Image src={posterImgUrl} alt={title} width={300} height={450} />
    </li>
  );
}
