import React from "react";
import Container from "../ui/Container";
import { Link } from "react-router";
import Image from "../common/Image";
import SCImaage from "../../assets/images/springcollection.png";
import Countdown from "react-countdown";
const SpringCollection = () => {
  return (
    <section className="mx-15 mt-25 bg-[#EBEBEB] pt-7 pb-7.25">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h4 className="font-jost after:content-[] relative ml-16.5 text-sm leading-6 font-medium text-[#C32929] after:absolute after:top-2 after:-left-15 after:h-0.5 after:w-10 after:bg-[#c32929]">
              DEAL OF THE WEEK
            </h4>
            <h2 className="font-jost text-primary-black mt-2.25 text-[70px] font-normal">
              <span className="font-bold">Spring</span> Collection
            </h2>
            <Link
              className="font-jost text-primary-black after:bg-primary-black relative mb-29.5 inline-block text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
              to="/"
            >
              SHOP NOW
            </Link>
            <Countdown
              date={new Date("2026-04-24T00:00:00.000Z")}
              renderer={({ days, hours, minutes, seconds, completed }) => {
                // Render a countdown
                return (
                  <div className="flex">
                    <div className="flex">
                      <div>
                        <h3 className="font-jost text-primary-black text-[30px] leading-7.5 font-normal">
                          {days}
                        </h3>
                        <h4 className="font-jost text-secondary text-[16px] font-bold">
                          DAYS
                        </h4>
                      </div>
                      <span className="font-jost text-primary-black mr-5.5 ml-6.5 text-[30px] leading-7.5 font-normal">
                        :
                      </span>
                    </div>
                    <div className="flex">
                      <div>
                        <h3 className="font-jost text-primary-black text-[30px] leading-7.5 font-normal">
                          {hours}
                        </h3>
                        <h4 className="font-jost text-secondary text-[16px] font-bold">
                          HOURS
                        </h4>
                      </div>
                      <span className="font-jost text-primary-black mr-5.5 ml-6.5 text-[30px] leading-7.5 font-normal">
                        :
                      </span>
                    </div>
                    <div className="flex">
                      <div>
                        <h3 className="font-jost text-primary-black text-[30px] leading-7.5 font-normal">
                          {minutes}
                        </h3>
                        <h4 className="font-jost text-secondary text-[16px] font-bold">
                          MINS
                        </h4>
                      </div>
                      <span className="font-jost text-primary-black mr-5.5 ml-6.5 text-[30px] leading-7.5 font-normal">
                        :
                      </span>
                    </div>
                    <div className="flex">
                      <div>
                        <h3 className="font-jost text-primary-black text-[30px] leading-7.5 font-normal">
                          {seconds}
                        </h3>
                        <h4 className="font-jost text-secondary text-[16px] font-bold">
                          SEC
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
          <Image src={SCImaage} alt="springcollection" />
        </div>
      </Container>
    </section>
  );
};

export default SpringCollection;
