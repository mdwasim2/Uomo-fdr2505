import { Link } from "react-router";
import Image from "../../common/Image";

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className={` relative   md:h-full w-full ${item.id == 1 && "md:col-span-2 md:row-span-2"} ${item.id == 2 && "md:col-span-2 md:row-span-1"}`}
    >
      <Image src={item.image} className="h-full w-full  object-fill   " alt={item.name} />
      <div className="w-2/4 md:w-auto absolute bottom-10 left-10">
        <h4 className="font-jost text-primary-black text-[10px] md:text-sm leading-6 font-normal">
          HOT LIST
        </h4>
        <h2 className="font-jost text-base md:text-[24px] font-medium">
          <span className="font-bold">{item.name} </span>COLLECTION
        </h2>
        <Link
          className="font-jost text-primary-black after:bg-primary-black relative text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
          to={item.link}
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Card;
