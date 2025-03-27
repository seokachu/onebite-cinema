import Link from "next/link";
import style from "../components/layout/global-layout.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </h1>
    </header>
  );
}
