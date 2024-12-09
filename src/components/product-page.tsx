import { Link, useParams } from "react-router-dom";
import { pizzas } from "../lists";

export function ProductPage() {
  const { pizzaId } = useParams();

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
    <div>
      <p>{pizza.description}</p>
      <p>{pizza.name}</p>
      <p>{pizza.discount}</p>
      <p>{pizza.photos}</p>
      <p>{pizza.previewUrl}</p>
      <p>{pizza.price}</p>
    </div>
  );
}
