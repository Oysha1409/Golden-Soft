import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Header,
  ProductView,
  UnderlineTabs,
  Product,
  Contact,
  Footer,
} from "@/component";

const ProductInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}products?id=${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <ProductView data={data} />
      <UnderlineTabs />
      <Product />
      <Contact />
      <Footer />
    </>
  );
};

export default ProductInfo;
