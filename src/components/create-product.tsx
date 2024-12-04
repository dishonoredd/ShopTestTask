import { useState } from "react";

export function CreateProductPage() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea placeholder="Описание" />
        <input type="text" placeholder="Цена" />
        <input type="text" placeholder="Скидка" />
        <input type="text" placeholder="Ссылка на превью" />
        <button onClick={() => {}}>Добавить</button>
      </form>
    </div>
  );
}
