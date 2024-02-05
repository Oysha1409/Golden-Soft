import React, { useContext, useState } from "react";
import { MainContext } from "../../context/useMainContext";
import { Icons } from "../../assets/icons";

const CartProducts = ({ data }) => {
  const { removeFromCart, addOne, removeOne } = useContext(MainContext);
  const { title, image, price, id, quantity } = data;

  return (
    <div className="relative shadow-md w-full flex gap-4 py-2">
      <img src={image} alt="" width={102} height={90} />
      <div>
        <h3 className="text-sm text-title-color font-normal">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-text-color text-xs font-normal">
            (12) отзывов
          </span>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <div className="flex items-center gap-2">
            <button
              className="text-base text-title-color px-4 py-2 disabled:text-gray-500"
              disabled={quantity == 1}
              onClick={() => removeOne(id)}
            >
              -
            </button>
            <span className="border-2 border-gray-400 px-4 py-1 text-sm text-title-color">
              {quantity}
            </span>
            <button
              className="text-base text-title-color px-4 py-2 disabled:text-gray-500"
              onClick={() => addOne(id)}
            >
              +
            </button>
          </div>
          <span className="absolute bottom-2 text-title-color font-semibold right-5">
            {(price * quantity).toLocaleString()} ₽
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => removeFromCart(id)}
        className="absolute flex items-center gap-2 top-3 right-3"
      >
        <Icons.trashIcon />
        <span className="mt-1 text-primary text-lg font-normal">Удалить</span>
      </button>
    </div>
  );
};

export default CartProducts;
