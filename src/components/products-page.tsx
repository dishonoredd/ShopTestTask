import { Link } from "react-router-dom"
import { useAppSelector } from "../store"
import css from "/src/styles/products.module.css"
import { PizzaCard } from "./pizza-card/pizza-card"

export function ProductsPage() {
  const pizzas = useAppSelector((state) => state.productsSlice.products)

  return (
    <section className={css.main}>
      {pizzas.map((x) => {
        return (
          <Link to={`/products/${x.id}`} key={x.id}>
            <PizzaCard isLiked={false} pizza={x} onLikeToggle={() => {}} />
          </Link>
        )
      })}
    </section>
  )
}
