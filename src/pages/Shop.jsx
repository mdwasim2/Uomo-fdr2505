import axios from "axios";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import AllProducts from "../components/shop/AllProducts";
import ShopBanner from "../components/shop/ShopBanner";
import SortAndView from "../components/shop/Sort&View";
import Container from "../components/ui/Container";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState(4)
  // let totalproduct = products.length;  
  // let showproduct = 40 ; 

  // let result = Math.round((showproduct/ totalproduct) * 100)

  function getProducts() {
    axios
      .get("https://dummyjson.com/products?page=1&limit=60")
      .then((res) => {
        setProducts(res.data.products);

      })
      .catch((err) => {
        throw new Error(err.message ? err.message : "Something went wrong!");
      });
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <main className="h-full">
      <ShopBanner />
      <Container>
        <div className="flex justify-between mt-9 mb-10">
          <Breadcrumb />
          <SortAndView setView={setView} />
        </div>
      </Container>
      <AllProducts items={products} view={view} />
     
 

    </main>
  );
};

export default Shop;
