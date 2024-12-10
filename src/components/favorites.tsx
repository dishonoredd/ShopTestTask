import { PizzaCard } from "./pizza-card/pizza-card";
import { apiProvider } from "../api/api-provider";
import { useFavoritePizzas } from "../hooks/use-favorite-pizzas";
import { productsSlice, useAppDispatch } from "../store";
import css from "/src/styles/products.module.css";

export function Favorites() {
  const favoritePizzas = useFavoritePizzas();

  const dispatch = useAppDispatch();

  return (
    <section className={`${css.main} ${css.mainSection}`}>
      {favoritePizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          pizza={pizza}
          isLiked
          onLikeToggle={() => {
            apiProvider.dislikePizza(pizza);
            dispatch(productsSlice.actions.removeFavorite(pizza));
          }}
        />
      ))}
    </section>
  );
}
