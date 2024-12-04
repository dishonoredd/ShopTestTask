import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ProductsPage } from "./components/products-page";
import { ProductPage } from "./components/product-page";
import { CreateProductPage } from "./components/create-product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<ProductsPage />} path="/products"></Route>
        <Route element={<ProductPage />} path="/products/:pizzaId"></Route>
        <Route element={<CreateProductPage />} path="/create-product"></Route>
      </Routes>
    </>
  );
}

export default App;
