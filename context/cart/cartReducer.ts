import { ICartProduct } from "../../interfaces";
import { CartState } from "./";

type CartActionType =
  | {
      type: "[CART] - LoadCart from cookies | storage";
      payload: ICartProduct[];
    }
  | { type: "[CART] - Update Product"; payload: ICartProduct[] }
  | { type: "[CART] - Remove Product"; payload: ICartProduct[] }
  | { type: "[CART] - Change Product Quantity"; payload: ICartProduct[] }
  | {
      type: "[CART] - Update Order Summary";
      payload: {
        numberOfItems: number;
        subTotalPrice: number;
        tax_rate: number;
        totalPrice: number;
      };
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[CART] - LoadCart from cookies | storage":
      return {
        ...state,
        cart: action.payload,
      };

    case "[CART] - Update Product":
      return {
        ...state,
        cart: action.payload,
      };
    case "[CART] - Remove Product":
      return {
        ...state,
        cart: action.payload,
      };
    case "[CART] - Change Product Quantity":
      return {
        ...state,
        cart: action.payload,
      };
    case "[CART] - Update Order Summary":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
