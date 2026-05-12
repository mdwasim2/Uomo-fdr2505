import { IoHomeOutline } from "react-icons/io5";

const MobileNavigation = () => {
  return (
    <div className="bg-primary-white fixed bottom-0 left-0 w-full py-2.5 shadow-2xl shadow-gray-500 md:hidden">
      <ul className="flex justify-around">
        <li className="flex flex-col items-center">
          <button>
            <IoHomeOutline size={18} />
          </button>
          <span className="font-jost text-[13px] leading-6 font-normal">
            Home
          </span>
        </li>
        <li className="flex flex-col items-center">
          <button>
            <IoHomeOutline size={18} />
          </button>
          <span className="font-jost text-[13px] leading-6 font-normal">
            Shop
          </span>
        </li>
        <li className="flex flex-col items-center">
          <button>
            <IoHomeOutline size={18} />
          </button>
          <span className="font-jost text-[13px] leading-6 font-normal">
            Wishlist
          </span>
        </li>
        <li className="flex flex-col items-center">
          <button>
            <IoHomeOutline size={18} />
          </button>
          <span className="font-jost text-[13px] leading-6 font-normal">
            Cart
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
