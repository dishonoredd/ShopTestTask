import { Pizza } from "../../types/pizza";
import css from "./pizza-card.module.css";
import { Trash } from "./trash";

type Props = {
  pizza: Pizza;
  isLiked: boolean;
  onLikeToggle: () => void;
  onDelete?: () => void;
};

export function PizzaCard(props: Props) {
  return (
    <div
      className={`${css.pizza} ${props.isLiked ? css.active : ""}`}
      key={props.pizza.id}
    >
      <p>{props.pizza.description}</p>
      <p>{props.pizza.name}</p>
      <p>{props.pizza.discount}</p>
      <img src={props.pizza.previewUrl} alt="" />
      <p>{props.pizza.price}</p>
      {props.onDelete && (
        <button
          className={css.btn}
          onClick={(e) => {
            if (!props.onDelete) {
              return;
            }
            e.stopPropagation();
            props.onDelete();
          }}
        >
          <Trash />
        </button>
      )}

      <button
        className={css.btn}
        onClick={(e) => {
          props.onLikeToggle();
          e.stopPropagation();
        }}
      >
        {props.isLiked ? (
          <img src="src/assets/heart-liked.svg" alt="" />
        ) : (
          <img src="src/assets/heart.svg" alt="" />
        )}
      </button>
    </div>
  );
}
