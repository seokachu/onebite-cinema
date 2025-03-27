import Image from "next/image";
import Link from "next/link";
import type { MoviesListItemProps } from "@/types";

export default function MoviesListItem({ item }: MoviesListItemProps) {
  const { id, posterImgUrl, title } = item;

  return (
    <li>
      <Link href={`movie/${id}`}>
        <Image src={posterImgUrl} alt={title} width={300} height={450} />
      </Link>
    </li>
  );
}
