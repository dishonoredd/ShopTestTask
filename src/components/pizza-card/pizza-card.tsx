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
  const discountedPriceFn = () => {
    if (props.pizza.discount) {
      const discountedPrice = Math.round(
        props.pizza.price - props.pizza.price * (props.pizza.discount / 100)
      );
      return discountedPrice;
    }
  };

  return (
    <div
      className={`${css.pizza} ${props.isLiked ? css.active : ""}`}
      key={props.pizza.id}
    >
      {" "}
      <img className={css.img} src={props.pizza.previewUrl} alt="" />
      <p className={`${css.p} ${css.wide}`}>{props.pizza.name}</p>
      <p className={css.p}>{props.pizza.description}</p>
      {props.pizza.discount ? (
        <p className={css.p}>{discountedPriceFn()}р.</p>
      ) : (
        <p className={css.p}>{props.pizza.price}р.</p>
      )}
      <div className={css.btnContainer}>
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
    </div>
  );
}
