import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Listitem from "../common/Listitem";
import { Productcategory } from "../../api/productcategory";
import Product from "../common/Product";
import axios from "axios";

const TrendyProducts = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(1);

  let limitedproduct = products.slice(0,12)

  const handleActive = (id) => {
    setCategory(id)
  };

  function getProducts() {
    axios.get("https://dummyjson.com/product").then((res) => {
      setProducts(res.data.products)
    }).catch((err) => {
      throw new Error(err.message ? err.message : "Something went wrong!");
    })


  }

  useEffect(() => {

    getProducts()
  }, [])



  return (
    <section className="mt-25.25">
      <Container>
        <h2 className="font-jost text-primary-black text-center text-[35px] font-normal">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h2>
        <ul className="flex justify-center gap-13.5 mt-7.5">
          {Productcategory?.map((item) => (
            <Listitem
              onClick={()=>handleActive(item.id)}
              className={`${category == item.id ? "font-jost relative  text-primary-black cursor-pointer text-base font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-black  after:duration-300 after:content-[''] after:w-[40%]" :"font-jost text-secondary cursor-pointer text-base font-medium"} `}
            >
              {item.name}
            </Listitem>
          ))}
        </ul>
        <div className=" grid grid-cols-4  gap-x-7.5 gap-y-15 mt-10">
          {limitedproduct.map((item) => (
            <Product item={item} key={item.id} />

          ))}
        </div>

      </Container>
    </section>
  );
};

export default TrendyProducts;
