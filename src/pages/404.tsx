import Link from "next/link";
import style from "../components/global-layout.module.css";

export default function Page() {
  return (
    <section className={style.error_section}>
      <div>
        <h2>🥲존재하지 않는 페이지 입니다.</h2>
        <p>메인페이지로 이동하시겠습니까? </p>
      </div>
      <Link href={"/"}>메인페이지로 이동하기 &#8640;</Link>
    </section>
  );
}
