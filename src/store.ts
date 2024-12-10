import {
  configureStore,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Pizza } from "./types/pizza";
import { useDispatch, useSelector } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

type ProductsState = {
  products: Pizza[];
  favorites: Pizza[];
};

const initialState: ProductsState = {
  products: [],
  favorites: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<Pizza>) => {
      state.products.push(action.payload);
    },
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.products = action.payload;
    },

    addFavorite: (state, action: PayloadAction<Pizza>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Pizza>) => {
      state.favorites = state.favorites.filter(
        (pizza) => pizza.id !== action.payload.id
      );
    },
    setFavorites: (state, action: PayloadAction<Pizza[]>) => {
      state.favorites = action.payload;
    },
    deletePizza: (state, action: PayloadAction<Pizza>) => {
      state.products = state.products.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const store = configureStore({
  reducer: {
    productsSlice: productsSlice.reducer,
  },
});
