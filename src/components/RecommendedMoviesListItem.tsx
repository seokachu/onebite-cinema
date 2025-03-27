import Image from "next/image";
import type { RecommendedMoviesListItemProps } from "@/types";

export default function RecommendedMoviesListItem({
  item,
}: RecommendedMoviesListItemProps) {
  const { posterImgUrl, title } = item;

  return (
    <li>
      <Image src={posterImgUrl} alt={title} width={300} height={300} />
    </li>
  );
}
