import Footer from "@/components/Footer";
import Header from "@/components/Header";
import style from "./global-layout.module.css";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
}
