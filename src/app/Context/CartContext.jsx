"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/Auth/Providers/AuthProvider";

const { createContext, useState, useEffect, useContext } = require("react");


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const {user}=useContext(AuthContext)
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setToState();
  }, []);

  const setToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  // const addToCart = async({
  //   productId,
  //   name,
  //   price,
  //   image,
  //   quantity = 1,
  //   category,
  // }) => {
  //   const item = { productId, name, price, image, quantity, category };

  //   const isExist = Array.isArray(cart?.cartItems) ? cart.cartItems.find((i) => i.productId === item.productId) : null;

  //   let newCartProduct;
  //   if (isExist) {
  //     newCartProduct=cart?.cartItems?.map(i=>i.productId==isExist.productId?item:i)
  //   } else {
  //     newCartProduct = [...(cart?.cartItems || []), item];
  //   }
  //   localStorage.setItem("cart", JSON.stringify({ cartItems: newCartProduct }));
  // };

  const addToCart = async ({
    productId,
    name,
    price,
    image,
    quantity = 1,
    category,
  }) => {
    const item = { productId, name, price, image, quantity, category };

    let existingCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : { cartItems: [] };
    setCart(existingCart);

    const cartItemsArray = existingCart.cartItems || [];

    const isExistIndex = cartItemsArray.findIndex(
      (i) => i.productId === item.productId
    );

    if (isExistIndex !== -1) {
      // newCartProduct=cart?.cartItems?.map(i=>i.productId==isExist.productId?item:i)
      // If the item already exists, update its quantity
      cartItemsArray[isExistIndex].quantity += 1;
    } else {
      cartItemsArray.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setCart(existingCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = {
      cartItems: cart.cartItems.map((item) => {
        if (item.productId === productId) {
          item.quantity += 1;
        }
        return item;
      }),
    };

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = {
      cartItems: cart.cartItems.map((item) => {
        if (item.productId === productId && item.quantity > 1) {
          item.quantity -= 1;
        }
        return item;
      }),
    };

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const deleteProductFromLocalCart = (productId) => {
    const updatedCartItems = {
      cartItems: cart?.cartItems?.filter(
        (item) => item.productId !== productId
      ),
    };

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    setCart(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteProductFromLocalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// import React from 'react'

// const cartContext = () => {
//   return (
//     <div>cartContext</div>
//   )
// }

export default CartContext;
