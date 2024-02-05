import React, { useContext } from "react";
import { Rating } from "@material-tailwind/react";
import { caclDiscount } from "../../utils";
import { MainContext } from "../../context/useMainContext";

const LikedProducts = ({ data, cart }) => {
  const { title, image, price, id } = data;
  const { addToCart, removeFromCart } = useContext(MainContext);

  const handleCart = () => {
    cart ? removeFromCart(id) : addToCart(data);
  };

  return (
    <div className="relative shadow-md w-full flex gap-4 py-2">
      <img src={image} alt="" width={102} height={90} />
      <div>
        <h3 className="text-sm text-title-color font-normal">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <Rating value={4} />

          <span className="text-text-color text-xs font-normal">
            (12) отзывов
          </span>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <span className="text-title-color">{caclDiscount(price, 15)} </span>
          <span className="line-through">{price} ₽ </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleCart}
        className="absolute top-3 right-3"
      >
        {cart ? "Delete" : "Add"}
      </button>
    </div>
  );
};

export default LikedProducts;
