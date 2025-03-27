import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";
import globalStyle from "../layout/global-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return alert("검색어를 입력해 주세요.");
    if (q === search) return;

    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={style.search_inner}>
          <label>
            <span className={globalStyle.visually_hidden}>영화제목 검색</span>
            <input
              type="text"
              value={search}
              onChange={onChangeSearch}
              placeholder="검색어를 입력해 주세요."
            />
          </label>
          <button type="submit">검색</button>
        </div>
      </form>
      {children}
    </div>
  );
}
