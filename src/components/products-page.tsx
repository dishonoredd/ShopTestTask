import { Link } from "react-router-dom";
import { productsSlice, useAppDispatch, useAppSelector } from "../store";
import css from "/src/styles/products.module.css";
import { PizzaCard } from "./pizza-card/pizza-card";
import { useFavoritePizzas } from "../hooks/use-favorite-pizzas";
import { apiProvider } from "../api/api-provider";

export function ProductsPage() {
  const pizzas = useAppSelector((state) => state.productsSlice.products);

  const favorites = useFavoritePizzas();

  const dispatch = useAppDispatch();

  return (
    <section className={css.main}>
      {pizzas.map((x) => {
        const liked = favorites.find((favorite) => x.id === favorite.id);
        return (
          <Link to={`/products/${x.id}`} key={x.id}>
            <PizzaCard
              isLiked={Boolean(liked)}
              pizza={x}
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
          </Link>
        );
      })}
    </section>
  );
}
