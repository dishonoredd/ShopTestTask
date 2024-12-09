import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ProductsPage } from "./components/products-page";
import { ProductPage } from "./components/product-page";
import { CreateProductPage } from "./components/create-product";
import { Favorites } from "./components/favorites";
import { useEffect } from "react";
import { productsSlice, useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((products) => dispatch(productsSlice.actions.setPizzas(products)));
  }, []);

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
