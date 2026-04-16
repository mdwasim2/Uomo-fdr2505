import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Listitem from "../common/Listitem";
import { Productcategory } from "../../api/productcategory";
import Product from "../common/Product";
import axios from "axios";

const TrendyProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filterproduct, setFilterProduct] = useState([]);
  const [productLimit, setProductLimit] = useState([]);

  const handleActive = (name) => {
    setCategory(name);
    if (name == "all") {
      setFilterProduct(products);
    } else {
      let filterproduct = products.filter((item) => item.category === name);
      setFilterProduct(filterproduct);
    }
  };

  function getProducts() {
    axios
      .get("https://dummyjson.com/product")
      .then((res) => {
        setProducts(res.data.products);
        setCategory("all");
      })
      .catch((err) => {
        throw new Error(err.message ? err.message : "Something went wrong!");
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let limit = products.slice(0, 8);
    setProductLimit(limit);
  }, [products]);

  const handleSeeAllProduct = () => {
    let limit = products.slice(0, filterproduct.length - 1);
    setProductLimit(limit);
  };
  const handleSeeLessProduct = () => {
    let limit = products.slice(0, 8);
    setProductLimit(limit);
  };
  return (
    <section className="mt-25.25">
      <Container>
        <h2 className="font-jost text-primary-black text-center text-[35px] font-normal">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h2>
        <ul className="mt-7.5 flex justify-center gap-13.5">
          {Productcategory?.map((item) => (
            <Listitem
              onClick={() => handleActive(item.name)}
              className={`${category == item.name ? "font-jost text-primary-black after:bg-primary-black relative cursor-pointer text-base font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[40%] after:duration-300 after:content-['']" : "font-jost text-secondary cursor-pointer text-base font-medium"} `}
            >
              {item.name}
            </Listitem>
          ))}
        </ul>
        <div className="mt-10 grid grid-cols-4 gap-x-7.5 gap-y-15">
          {category == "all"
            ? productLimit.map((item) => <Product item={item} key={item.id} />)
            : filterproduct.map((item) => (
                <Product item={item} key={item.id} />
              ))}
        </div>
        <div className="text-center">
          {productLimit.length > 8 ? (
            <button
              onClick={handleSeeLessProduct}
              className="font-jost text-primary-black after:bg-primary-black relative mt-10.5 cursor-pointer text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
            >
              SEE LESS PRODUCT
            </button>
          ) : (
            <button
              onClick={handleSeeAllProduct}
              className="font-jost text-primary-black after:bg-primary-black relative mt-10.5 cursor-pointer text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
            >
              SEE ALL PRODUCT
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TrendyProducts;
