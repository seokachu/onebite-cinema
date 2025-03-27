import "@/styles/globals.css";
import { ReactNode } from "react";
import GlobalLayout from "@/components/layout/GlobalLayout";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
