import { Link } from "react-router-dom";
import css from "/src/styles/heaader.module.css";

export function Header() {
  return (
    <header className={css.header}>
      <Link to={"/products"} className={css.link}>
        Пицца
      </Link>
      <Link to={"/favorites"} className={css.link}>
        Избранное
      </Link>
      <Link to={"/create-product"} className={css.link}>
        Создать пиццу
      </Link>
    </header>
  );
}
