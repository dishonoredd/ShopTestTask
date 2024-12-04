import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pizzas } from "./lists";
import { Pizza } from "./types/pizza";
import { useDispatch, useSelector } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

type ProductsState = {
  products: Pizza[];
};

const initialState: ProductsState = {
  products: pizzas,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<Pizza>) => {
      state.products.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
