import React, { useContext, useEffect, useState } from "react";
import { Header, Footer } from "@/component";
import { createFakeArr } from "@/utils";
import { useParams } from "react-router-dom";
import { MainContext } from "../../context/useMainContext";
import ProductCard from "@/component/Product/ProductCard";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
const Product = () => {
  const { type } = useParams();

  const { cartItems, likeItems } = useContext(MainContext);
  const [data, setData] = useState([]);
  const fakeArr = createFakeArr(8);

  async function getData() {
    return await fetch(
      `${import.meta.env.VITE_API_URL}products?category=${type}`
    ).then((res) => res.json().then((json) => setData(json)));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container ">
        <div className="grid grid-cols-4 gap-8 my-16">
          {data.length
            ? data.map((el) => (
                <ProductCard
                  key={el.id}
                  {...el}
                  data={el}
                  cart={cartItems.some((item) => item.id == el.id)}
                  like={likeItems.some((item) => item.id == el.id)}
                />
              ))
            : fakeArr.map((el, i) => (
                <Skeleton key={i} width={288} height={400} />
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
