import React from "react";
import Container from "../ui/Container";
import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  let { pathname } = useLocation();
  let location = pathname.split("/").pop();
  return (

      <h2 className="font-jost text-primary-black text-sm leading-6 font-medium uppercase">
        <Link to="/">HOME</Link> / {location}
      </h2>
   
  );
};

export default Breadcrumb;
