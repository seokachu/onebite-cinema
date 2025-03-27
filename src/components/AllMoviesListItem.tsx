import Image from "next/image";
import type { AllMoviesListItemProps } from "@/types";

export default function AllMoviesListItem({ item }: AllMoviesListItemProps) {
  const { posterImgUrl, title } = item;

  return (
    <li>
      <Image src={posterImgUrl} alt={title} width={300} height={300} />
    </li>
  );
}
