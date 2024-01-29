import { Checkbox, Rating, Typography } from "@material-tailwind/react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { caclDiscount } from "../../utils";
import Btn from "../../ui/Button";
import { Icons } from "@/assets/icons";
import ProductAccordion from "../Accordion";

const ProductView = ({ data }) => {

    console.log(caclDiscount(33000, 15));
  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex gap-8 align-middle">
          <div className=" basis-1/2">
            {data.length ? (
              <img src={data[0].image} className="w-full h-[513px]" alt="" />
            ) : (
              <Skeleton width={605} height={513} />
            )}
          </div>
          <div className=" basis-1/2">
            {data.length ? (
              <div className="flex gap-3 align-middle mb-4">
                <span className="text-text-color text-sm inline-block mt-1 font-normal">
                  JA182765
                </span>
                <Rating value={4} />
                <span className="text-primary font-sm font-semibold">
                  (12) отзывов
                </span>
              </div>
            ) : (
              <Skeleton width={200} height={30} />
            )}

            {data.length ? (
              <Typography variant="h2" className="text-title-color text-2xl ">
                {data[0].title}
              </Typography>
            ) : (
              <Skeleton width={400} height={30} />
            )}

            <div className="mt-3">
              <p className="text-title-color text-sm font-semibold ">
                Подходит для установки на:
              </p>

              <div className="flex gap-3">
                <div className="flex align-middle gap-2">
                  <Checkbox color="blue"  checked />
                  <span className="text-text-color text-sm font-normal mt-3">
                    Деревянную дверь
                  </span>
                </div>
                <div className="flex align-middle gap-2">
                  <Checkbox color="blue" checked />
                  <span className="text-text-color text-sm font-normal mt-3">
                    Межкомнатную дверь
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-title-color text-2xl font-semibold">
                {caclDiscount(data[0]?.price, 15)}
              </span>

              <span className="ml-3 text-[#A4A4A4] text-xl font-light line-through">
                {data[0]?.price}
              </span>
            </div>

            <div className="flex align-middle gap-8 mt-4 mb-8">
                <Btn size="large" text="Купить" type="button"/>

                <button type="button" className="flex items-center gap-2">
                    <Icons.likeIcon />
                    В избранное
                </button>
            </div>

            <ProductAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
