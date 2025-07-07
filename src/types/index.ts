export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  discount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category =
  | "Все"
  | "Электроника"
  | "Одежда"
  | "Дом и сад"
  | "Спорт"
  | "Красота"
  | "Книги";
