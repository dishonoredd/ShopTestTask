import { Pizza } from "./types/pizza";
import { Review } from "./types/review";

export const pizzas: Pizza[] = [
  {
    id: "1",
    name: "Cheese",
    description: "Cheese pizza",
    price: 100,
    previewUrl: "https://www.pizza.com/cheese.jpg",
    discount: null,
    photos: [
      "https://www.pizza.com/cheese1.jpg",
      "https://www.pizza.com/cheese2.jpg",
    ],
  },
  {
    id: "2",
    name: "Pepperoni",
    description: "Pepperoni pizza",
    price: 120,
    previewUrl: "https://www.pizza.com/pepperoni.jpg",
    discount: null,
    photos: [
      "https://www.pizza.com/pepperoni1.jpg",
      "https://www.pizza.com/pepperoni2.jpg",
    ],
  },
  {
    id: "3",
    name: "Hawaiian",
    description: "Hawaiian pizza",
    price: 150,
    previewUrl: "https://www.pizza.com/hawaiian.jpg",
    discount: null,
    photos: [
      "https://www.pizza.com/hawaiian1.jpg",
      "https://www.pizza.com/hawaiian2.jpg",
    ],
  },
];

export const reviews: Review[] = [
  {
    pizzaId: "1",
    authorName: "John Doe",
    title: "Best pizza ever",
    text: "I love this pizza!",
    estimation: 4,
  },
  {
    pizzaId: "2",
    authorName: "Jane Doe",
    title: "Great pizza",
    text: "This pizza is so good!",
    estimation: 5,
  },
  {
    pizzaId: "3",
    authorName: "Bob Smith",
    title: "Average pizza",
    text: "This pizza is okay.",
    estimation: 3,
  },
];
