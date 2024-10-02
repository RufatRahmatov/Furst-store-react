import React from "react";
import BgImg from "../../components/bgimg";
import { Card } from "@mui/material";
import CardList from "../../components/cards";
import ProductList from "../../components/featuredproducts";
// import AppModal from "../../components/modal";

const HomePage = () => {
  return (
    <div>
      <main>
        {/* <AppModal /> */}
        <BgImg />
        <Card />
        <CardList />
        {/* <Product /> */}
        <ProductList />
      </main>
    </div>
  );
};

export default HomePage;
