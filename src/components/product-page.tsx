import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../store";
import css from "/src/styles/product.module.css";

export function ProductPage() {
  const { pizzaId } = useParams();

  const pizzas = useAppSelector((state) => state.productsSlice.products);

  const pizza = pizzas.find((pizza) => pizza.id === pizzaId);
  if (!pizza) {
    return (
      <div>
        <Link to="/products">Вернуться на главную</Link>
        <p>Не удалось найти пиццу</p>
      </div>
    );
  }

  return (
    <section className={css.section}>
      <div className={css.element}>
        <p className={css.title}>{pizza.name}</p>
        <div className={css.imgContainer}>
          {pizza.photos.map((photo) => (
            <img className={css.img} key={photo} src={photo} alt="" />
          ))}
        </div>
        <p className={css.price}>{pizza.price}</p>
        <p className={css.price}>{pizza.description}</p>
      </div>
    </section>
  );
}
