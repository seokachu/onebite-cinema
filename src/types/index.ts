import { NextPage } from "next";
import { ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export interface MovieData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  releaseDate: string;
  company: string;
  genres: string[];
  runtime: number;
  posterImgUrl: string;
}

export interface RecommendedMoviesListItemProps {
  item: MovieData;
}

export interface AllMoviesListItemProps {
  item: MovieData;
}
