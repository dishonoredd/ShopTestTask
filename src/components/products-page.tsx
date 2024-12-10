import { useNavigate } from "react-router-dom";
import { productsSlice, useAppDispatch, useAppSelector } from "../store";
import css from "/src/styles/products.module.css";
import { PizzaCard } from "./pizza-card/pizza-card";
import { useFavoritePizzas } from "../hooks/use-favorite-pizzas";
import { apiProvider } from "../api/api-provider";
import { useState } from "react";

export function ProductsPage() {
  const pizzas = useAppSelector((state) => state.productsSlice.products);
  const favorites = useFavoritePizzas();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const nextPage = () => {
    if (page === maxPages) {
      return;
    }
    setPage(page + 1);
  };

  const ELEMENTS_PER_PAGE = 6;

  const maxPages = Math.ceil(pizzas.length / ELEMENTS_PER_PAGE);

  return (
    <section className={css.mainSection}>
      <div className={css.buttonContainer}>
        <button className={css.btn} onClick={() => prevPage()}>
          Назад
        </button>
        <p className={css.p}>{page}</p>
        <button className={css.btn} onClick={() => nextPage()}>
          Вперед
        </button>
      </div>
      <div className={css.main}>
        {pizzas
          .slice((page - 1) * ELEMENTS_PER_PAGE, page * ELEMENTS_PER_PAGE)
          .map((x) => {
            const liked = favorites.find((favorite) => x.id === favorite.id);
            return (
              <div onClick={() => navigate(`/products/${x.id}`)} key={x.id}>
                <PizzaCard
                  isLiked={Boolean(liked)}
                  pizza={x}
                  onDelete={() => {
                    dispatch(productsSlice.actions.deletePizza(x));
                    apiProvider.deletePizza(x);
                  }}
                  onLikeToggle={() => {
                    if (liked) {
                      dispatch(productsSlice.actions.removeFavorite(x));
                      apiProvider.dislikePizza(x);
                    } else {
                      dispatch(productsSlice.actions.addFavorite(x));
                      apiProvider.likePizza(x);
                    }
                  }}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
