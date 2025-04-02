import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Meta({
  title = "한입 시네마",
  description = "한입 시네마에 등록된 영화들을 만나보세요.",
  image = "/thumbnail.png",
  url = `${process.env.NEXT_PUBLIC_BASE_URL}`,
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
