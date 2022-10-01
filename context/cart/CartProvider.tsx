import { FC, useReducer, PropsWithChildren, useEffect } from "react";
import Cookie from "js-cookie";

import { ICartProduct } from "../../interfaces";

import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotalPrice: number;
  tax_rate: number;
  totalPrice: number;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  subTotalPrice: 0,
  tax_rate: 0,
  totalPrice: 0,
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const getCartToCookie: ICartProduct[] = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "[CART] - LoadCart from cookies | storage",
        payload: getCartToCookie,
      });
    } catch (e) {
      dispatch({
        type: "[CART] - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (!state.cart.length) return;
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotalPrice = state.cart.reduce(
      (prev, current) => current.quantity * current.price + prev,
      0
    );
    const tax = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);
    const tax_rate = subTotalPrice * tax;

    const orderSumary = {
      numberOfItems,
      subTotalPrice,
      tax_rate,
      totalPrice: subTotalPrice + tax_rate,
    };

    dispatch({ type: "[CART] - Update Order Summary", payload: orderSumary });
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct) => {
    const isProductToCart = state.cart.some(
      (item) => item._id === product._id && item.size === product.size
    );
    if (isProductToCart) {
      const updateProduct = state.cart.map((item) => {
        if (item._id === product._id && item.size === product.size) {
          item.quantity += product.quantity;
          return item;
        }
        return item;
      });
      return dispatch({
        type: "[CART] - Update Product",
        payload: updateProduct,
      });
    }
    return dispatch({
      type: "[CART] - Update Product",
      payload: [...state.cart, product],
    });
  };

  const updateProductQuantity = (product: ICartProduct) => {
    const updatedProducts = state.cart.map((item) => {
      if (item._id === product._id && item.size === product.size) {
        return product;
      }
      return item;
    });
    dispatch({
      type: "[CART] - Change Product Quantity",
      payload: updatedProducts,
    });
  };

  const removeCartProduct = (product: ICartProduct) => {
    const newProducts = state.cart.filter(
      (item) => !(item._id === product._id && item.size === product.size)
    );
    /* state.cart.filter((item) => {
      if (item._id === product._id && item.size === product.size) return;
      return item; 
    });*/
    dispatch({ type: "[CART] - Remove Product", payload: newProducts });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // method
        addProductToCart,
        updateProductQuantity,
        removeCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
