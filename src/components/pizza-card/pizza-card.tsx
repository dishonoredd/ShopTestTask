import { Pizza } from "../../types/pizza"
import css from "./pizza-card.module.css"
import { Trash } from "./trash"

type Props = {
  pizza: Pizza
  isLiked: boolean
  onLikeToggle: () => void
}

export function PizzaCard(props: Props) {
  return (
    <div className={css.pizza} key={props.pizza.id}>
      <p>{props.pizza.description}</p>
      <p>{props.pizza.name}</p>
      <p>{props.pizza.discount}</p>
      <img src={props.pizza.previewUrl} alt="" />
      <p>{props.pizza.price}</p>
      <button className={css.btn}>
        <Trash />
      </button>
      <button className={css.btn}>
        <img src="src/assets/heart.svg" alt="" />
      </button>
    </div>
  )
}
