import React, { useState } from "react";
import Container from "../ui/Container";
import Listitem from "../common/Listitem";
import { Productcategory } from "../../api/productcategory";

const TrendyProducts = () => {
  const [category, setCategory] = useState("all");

  const handleActive = () => {
    alert("asdfasdf");
  };
  return (
    <section className="mt-25.25">
      <Container>
        <h2 className="font-jost text-primary-black text-center text-[35px] font-normal">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h2>
        <ul className="flex justify-center gap-13.5">
          {Productcategory?.map((item) => (
            <Listitem
              onClick={handleActive}
              className="font-jost text-secondary cursor-pointer text-base font-medium"
            >
              {item.name}
            </Listitem>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TrendyProducts;
