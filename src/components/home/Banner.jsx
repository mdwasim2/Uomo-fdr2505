import React from "react";
import Image from "../common/Image";
import { BannerData } from "../../api/bannerdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          className="absolute bottom-14.5 left-48.75 flex gap-5"
          style={{ margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="h-1.5 w-1.5 rounded-full bg-[#DDC2B9]"></div>
    ),
  };
  return (
    <section className="mx-15">
      <Slider {...settings}>
        {BannerData?.map((item) => (
          <Image
            className="w-full text-center"
            key={item.id}
            src={item.banner}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
