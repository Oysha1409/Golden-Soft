import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useGetData from "@/hooks/useGetData";
import Title from "@/ui/Title";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

import { Navigation } from "swiper/modules";
import { Icons } from "@/assets/icons";
import { useContext } from "react";
import { MainContext } from "../../context/useMainContext";
const Product = () => {
  const fakeArr = Array.from({ length: 5 });
  const { data } = useGetData({ url: "products" });
  const { cartItems } = useContext(MainContext);

  console.log(cartItems, "cartItemssssssssss");
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex justify-between relative ">
          <Title text={"Наши популярные продукты"} alignment={"left"} />

          <div className="flex gap-4">
            <button className="prev-el">
              <Icons.linerIcon className="-rotate-180" />
            </button>
            <button className="next-el">
              <Icons.linerIcon />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-el",
            prevEl: ".prev-el",
          }}
          modules={[Navigation]}
          className="mySwiper2 mt-16"
        >
          {data.length
            ? data.map((el) => (
                <SwiperSlide key={el.id}>
                  <ProductCard
                    {...el}
                    data={el}
                    cart={cartItems.some((item) => item.id == el.id)}
                  />
                </SwiperSlide>
              ))
            : fakeArr.map((_, i) => (
                <SwiperSlide key={i}>
                  <Skeleton width={288} height={420} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Product;
