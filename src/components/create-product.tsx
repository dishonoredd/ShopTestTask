import { useState } from "react";
import { NumericInput } from "./numeric-input";
import { productsSlice, useAppDispatch } from "../store";
import css from "/src/styles/create.module.css";

export function CreateProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState<number | undefined>(undefined);
  const [photos, setPhotos] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [price, setPrice] = useState<number | undefined>(undefined);

  const dispatch = useAppDispatch();

  const disabled =
    name === "" ||
    description === "" ||
    previewUrl === "" ||
    price === undefined;

  const reset = () => {
    setName("");
    setDescription("");
    setDiscount(undefined);
    setPhotos("");
    setPreviewUrl("");
    setPrice(undefined);
  };

  return (
    <section className={css.conteiner}>
      <form className={css.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={css.input}
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <NumericInput
          placeholder="Цена в рублях"
          value={price}
          onChange={(number) => setPrice(number)}
          maxCount={4}
        />
        <input
          className={css.input}
          type="text"
          placeholder="Ссылка на превью"
          value={previewUrl}
          onChange={(e) => {
            setPreviewUrl(e.target.value);
          }}
        />
        <NumericInput
          placeholder="Скидка в %"
          value={discount}
          onChange={(number) => setDiscount(number)}
          maxCount={2}
        />

        <input
          className={css.input}
          type="text"
          placeholder="Фото"
          value={photos}
          onChange={(e) => {
            setPhotos(e.target.value);
          }}
        />
        <input
          className={css.input}
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button
          className={css.btn}
          onClick={() => {
            if (disabled) return;

            const product = {
              name: name,
              price: price,
              discount: discount,
              previewUrl: previewUrl,
              description: description,
              photos: [],
              id: crypto.randomUUID(),
            };

            dispatch(productsSlice.actions.addPizza(product));
            fetch("http://localhost:3000/products", {
              method: "POST",
              body: JSON.stringify(product),
            });
            reset();
          }}
          disabled={disabled}
        >
          Добавить
        </button>
      </form>
    </section>
  );
}
