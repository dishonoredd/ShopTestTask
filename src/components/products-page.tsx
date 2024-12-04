import { Link } from "react-router-dom";
import { useAppSelector } from "../store";

export function ProductsPage() {
  const pizzas = useAppSelector((state) => state.products.products);

  return (
    <main>
      <div>
        {pizzas.map((x) => {
          return (
            <Link to={`/products/${x.id}`}>
              <div>
                <p>{x.name}</p>
                <p>{x.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
