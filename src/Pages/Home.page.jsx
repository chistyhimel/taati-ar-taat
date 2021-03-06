import React from "react";
import Banner from "../components/Banner/Banner.component";
import CustomerReview from "../components/CustomerReview/CustomerReview.component";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection.component";
import ProductCardSecondary from "../components/ProductCardSecondary/ProductCardSecondary.component";
import ProductCategory from "../components/ProductCategory/ProductCategory.component";

const Home = () => {
  return (
    <>
      <Banner />
      <CustomerReview />
      <FeaturedCollection />
      <ProductCategory />
      <FeaturedCollection />
      <hr />
      <FeaturedCollection />
    </>
  );
};

export default Home;
