import { useEffect, useState } from "react"
import { Pizza } from "../types/pizza"
import { PizzaCard } from "./pizza-card/pizza-card"
import { apiProvider } from "../api/api-provider"

export function Favorites() {
  // Todo: Вынести в кастомный хук const favoritePizzas = useFavoritePizzas()
  const [favoritePizzas, setFavoritePizzas] = useState<Pizza[]>([])
  useEffect(() => {
    apiProvider.getFavoritesPizzas().then((pizzas: Pizza[]) => setFavoritePizzas(pizzas))
  }, [])

  return (
    <section>
      {favoritePizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} isLiked onLikeToggle={() => apiProvider.dislikePizza(pizza)} />
      ))}
    </section>
  )
}
