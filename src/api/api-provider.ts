import { Pizza } from "../types/pizza";

const baseUrl = "http://localhost:3002";

export const apiProvider = {
  getPizzas: () =>
    fetch(`${baseUrl}/products`).then((response) => response.json()),
  getFavoritesPizzas: () =>
    fetch(`${baseUrl}/favorites`).then((response) => response.json()),
  likePizza: (pizza: Pizza) =>
    fetch(`${baseUrl}/favorites`, {
      method: "POST",
      body: JSON.stringify(pizza),
    }).then((response) => response.json()),
  dislikePizza: (pizza: Pizza) =>
    fetch(`${baseUrl}/favorites/${pizza.id}`, {
      method: "DELETE",
    }).then((response) => response.json()),
  deletePizza: (pizza: Pizza) =>
    fetch(`${baseUrl}/products/${pizza.id}`, {
      method: "DELETE",
    }).then((response) => response.json()),
};
