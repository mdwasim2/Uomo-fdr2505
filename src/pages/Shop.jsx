import React from "react";
import ShopBanner from "../components/shop/ShopBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import SortAndView from "../components/shop/Sort&View";
import Container from "../components/ui/Container";

const Shop = () => {
  return (
    <main>
      <ShopBanner />
      <Container>
        <div className="flex justify-between">
          <Breadcrumb />
          <SortAndView />
        </div>
      </Container>
    </main>
  );
};

export default Shop;
