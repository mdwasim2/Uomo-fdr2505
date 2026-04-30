import React from "react";
import ShopImage from "../../assets/images/shop-banner.png";
import Image from "../common/Image";
import Container from "../ui/Container";
const ShopBanner = () => {
  return (
    <section>
      <Image
        className="mx-auto w-full px-15"
        src={ShopImage}
        alt="shopbanner"
      />
      <Container className="relative">
        <ul className="absolute bottom-33.75 left-0 flex w-full gap-7.75">
          <li className="list_Item">#STAYHOME</li>
          <li className="list_Item">NEW IN</li>
          <li className="list_Item">HOODIES</li>
          <li className="list_Item">MEN</li>
        </ul>
      </Container>
    </section>
  );
};

export default ShopBanner;
