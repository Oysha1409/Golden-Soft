import React from 'react';
import { Banner, Header, Statistics, WhyUs, Categories, Product, Contact } from '@/component';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Statistics />
      <WhyUs />
      <Categories />
      <Product />
      <Contact/>
    </>
  );
};

export default Home;
