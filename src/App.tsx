import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { ProductsPage } from "./components/products/products-page";
import { CreateProductPage } from "./components/create-product/create-product";
import { Favorites } from "./components/favorites/favorites";
import { useEffect } from "react";
import { productsSlice, useAppDispatch } from "./store";
import { apiProvider } from "./api/api-provider";
import { ProductPage } from "./components/product/product-page";

const useLoadPizzas = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    apiProvider
      .getPizzas()
      .then((products) => dispatch(productsSlice.actions.setPizzas(products)));
  }, []);
};

function App() {
  useLoadPizzas();

  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Navigate to="/products" />} />
        <Route element={<ProductsPage />} path="/products"></Route>
        <Route element={<ProductPage />} path="/products/:pizzaId"></Route>
        <Route element={<Favorites />} path="/favorites"></Route>
        <Route element={<CreateProductPage />} path="/create-product"></Route>
      </Routes>
    </>
  );
}

export default App;
