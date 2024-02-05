import {
  Dialog,
  DialogBody,
  DialogHeader,
  Rating,
} from "@material-tailwind/react";
import { useContext } from "react";
import { MainContext } from "../../context/useMainContext";
import { caclDiscount } from "../../utils";
import LikedProducts from "../LikedProducts";
const Like = ({ open, handleOpen }) => {
  const { likeItems, cartItems } = useContext(MainContext);
  return (
    <Dialog open={open} handler={handleOpen} className="h-[600px]">
      <DialogHeader>Your favourite products</DialogHeader>
      <DialogBody className="h-[500px] overflow-y-auto">
        {likeItems.length ? (
          <div className="flex flex-col gap-4">
            {likeItems.map((el) => (
              // <div key={el.id} className="relative shadow-md w-full flex gap-4 py-2">
              //   <img src={el.image} alt="" width={102} height={90} />
              //   <div>
              //     <h3 className="text-sm text-title-color font-normal">
              //       {el.title}
              //     </h3>
              //     <div className="flex items-center gap-2 mt-2">
              //       <Rating value={4} />

              //       <span className="text-text-color text-xs font-normal">
              //         (12) отзывов
              //       </span>

              //     </div>
              //       <div className="flex gap-2 items-center mt-4">
              //         <span className="text-title-color">{caclDiscount(el.price, 15)} </span>
              //         <span className="line-through">{el.price} ₽ </span>
              //       </div>
              //   </div>

              //   <button type="button" className="absolute top-3 right-3">Добавить</button>
              // </div>
              <LikedProducts
                key={el.id}
                data={el}
                cart={cartItems.some((cart) => cart.id == el.id)}
              />
            ))}
          </div>
        ) : (
          <h2>Like box is empty</h2>
        )}
      </DialogBody>
    </Dialog>
  );
};

export default Like;
