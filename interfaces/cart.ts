import { ValidSizes } from "./";

export interface ICartProduct {
  _id: string;
  image: string;
  price: number;
  size?: ValidSizes;
  slug: string;
  title: string;
  gender: "men" | "women" | "kid" | "unisex";
  quantity: number;
}
