"use client";
import CartContext from "@/app/Context/CartContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsCart, BsHeart, BsHeartFill } from "react-icons/bs";
import { TfiMore } from "react-icons/tfi";

const NewProducts = () => {
  const { addToCart, cart } = useContext(CartContext);
  const [newProducts, setNewProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [hover, setHover] = useState(null);
  const handleMouseHove = (index) => {
    return setHover(index);
  };
  console.log(cart);
  useEffect(() => {
    const sorteProducts = [...newProducts]
      .sort((a, b) => a.createedAt - b.createedAt)
      .slice(0, 7);
    setSortedProducts(sorteProducts);
  }, []);

  const handleMouseLeave = () => {
    return setHover(null);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/")
      .then((data) => setNewProducts(data.data.products))
      .catch((Error) => console.log(Error));

    //   const nineNewProducts=newProducts.slice(0,9)
    //   setNewProducts(nineNewProducts)
  }, []);

  const wishlist = null;

  const handleAddToCart = (event, id, name, price, image, category) => {
    event.preventDefault();
    addToCart({
      productId: id,
      name,
      price,
      image,
      category,
    });

    return;
  };

  return (
    <div>
      <div className="w-[96%] md:w-[90%] mx-auto">
        <div className="title text-3xl text-center py-10">WHAT'S NEW</div>

        <div className="products">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
            {newProducts
              .sort((a, b) => a.createedAt - b.createedAt)
              .slice(0, 9)
              .map((product, idx) => (
                <Link
                  className="card cursor-pointer px-2 pt-2 pb-20 border border-gray-200 overflow-hidden relative "
                  onMouseOver={() => handleMouseHove(idx)}
                  onMouseLeave={handleMouseLeave}
                  href={`producttDetails/${product?._id}`}
                  key={product._id}
                >
                  <img
                    alt={"hello"}
                    src={
                      hover == idx
                        ? product.details_Image[0]
                        : product.details_Image[1]
                    }
                    className="transition-transform duration-500 transform hover:scale-110"
                  />

                  <div className="absolute bottom-1">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                  </div>

                  <button
                    disabled={cart?.cartItems?.find(
                      (wl) => wl?.productId === product._id
                    )}
                    onClick={(e) =>
                      handleAddToCart(
                        e,
                        product?._id,
                        product.name,
                        product.price,
                        product.details_Image[0],
                        product.category
                      )
                    }
                    className="z-10 cursor-pointer absolute top-2 right-0 px-2 bg-[rgba(127,0,255,0.4)] rounded-tl-3xl rounded-bl-3xl py-1 "
                  >
                    <BsCart
                      className={`text-xl font-bold 
                      ${
                        cart?.cartItems?.find(
                          (wl) => wl?.productId === product._id
                        )
                          ? "text-red-500 cursor-not-allowed"
                          : ""
                      }
                  `}
                    />
                  </button>
                  {/* <div className="cursor-pointer absolute top-10 right-0 px-2 bg-[rgba(127,0,255,0.3)] rounded-tl-3xl rounded-bl-3xl py-1">
                <BsHeart className="text-xl font-bold text-white" />
              </div> */}
                  <div className="cursor-pointer absolute top-10 right-0 px-2 bg-[rgba(127,0,255,0.3)] rounded-tl-3xl rounded-bl-3xl py-1">
                    {wishlist?.find((wl) => wl?.product._id === product._id) ? (
                      <BsHeartFill className="text-xl font-bold text-red-600" />
                    ) : (
                      <BsHeart className="text-xl font-bold text-white" />
                    )}
                  </div>
                </Link>
              ))}
            <Link
              href={"/all-products"}
              style={{
                backgroundImage:
                  "url('https://www.bhmpics.com/downloads/professional-photo-backgrounds/49.professional-backgrounds-for-websites3-2.jpg')",
              }}
              className="cursor-pointer px-2 pt-2 pb-20 border border-gray-200 overflow-hidden relative"
            >
              <div className="absolute left-0 top-0 flex justify-center items-center h-full w-full ">
                <div className="flex gap-2 items-center ">
                  <p className="uppercase text-[rgba(127,0,255,0.8)] font-bold">
                    View More
                  </p>
                  <TfiMore className="-rotate-45 text-[rgba(127,0,255,0.8)]" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
