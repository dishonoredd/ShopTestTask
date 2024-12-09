import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../store";

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
    <div>
      <p>{pizza.description}</p>
      <p>{pizza.name}</p>
      <p>{pizza.discount}</p>
      {pizza.photos.map((photo) => (
        <img key={photo} src={photo} alt="" />
      ))}
      <p>{pizza.price}</p>
    </div>
  );
}
