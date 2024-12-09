import { useEffect } from "react";
import { apiProvider } from "../api/api-provider";
import { Pizza } from "../types/pizza";
import { productsSlice, useAppDispatch, useAppSelector } from "../store";

export const useFavoritePizzas = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.productsSlice.favorites);
  useEffect(() => {
    apiProvider
      .getFavoritesPizzas()
      .then((pizzas: Pizza[]) =>
        dispatch(productsSlice.actions.setFavorites(pizzas))
      );
  }, []);
  return favorites;
};
