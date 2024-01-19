import { Typography } from "@material-tailwind/react";
import { Icons } from "@/assets/icons";
import { convertPrice } from "@/utils";

const ProductCard = ({ onSale, image, title, price }) => {
  return (
    <div className="w-[288px]">
      <div className="bg-gray-100 relative w-full h-[320px]">
        <img src={image} alt={title} className="mt-4"  />

        <button className="absolute top-3 right-3 bg-white text-xs px-[10px] py-2 font-medium uppercase shadow-[0px_2px_5px_0px_rgba(0,0,0,0.03)]">
          Sale
        </button>

        <button className="absolute top-3 left-3 flex gap-2 align-middle ">
          <span className="p-2 block bg-white">{onSale ? <Icons.trueIcon/> : <Icons.falseIcon/>}</span>

          <span className="block font-normal py-1 text-sm text-text-color">
            {onSale ? "В наличии" : " Нет в наличии"}
          </span>
        </button>


        <button className="absolute left-3 top-12 bg-white flex gap-[10px] p-2 text-title-color text-xs font-normal">
            <span className="block">
                <Icons.giftIcon className="mt-[1px]"/>
            </span>

            Подарок
        </button>
      </div>

      <div className="border-x-[1px] border-b-[1px] border-[#c4cdd5] px-3 py-[10px]">
        <Typography variant="h3" className="text-base text-text-color font-normal text-left">{title}</Typography>

        <div className="mt-3 flex align-middle gap-3">
          <span className="text-title-color font-semibold text-xl">{convertPrice(price)}</span>
          <span className="text-text-color font-light line-through">{convertPrice(price)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
