import Image from "next/image";
import type { AllMoviesListItemProps } from "@/types";
import { useRouter } from "next/router";

export default function AllMoviesListItem({ item }: AllMoviesListItemProps) {
  const { id, posterImgUrl, title } = item;
  const { push } = useRouter();

  const onClickDetail = () => {
    push(`movie/${id}`);
  };

  return (
    <li onClick={onClickDetail}>
      <Image src={posterImgUrl} alt={title} width={300} height={300} />
    </li>
  );
}
