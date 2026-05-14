import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";
import { navitems } from "../../api/navbardata";
import Image from "../common/Image";
const MobileNav = () => {
  const cartItems = 3;
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="mobile_nav mx-3.75 flex items-center justify-between md:hidden">
      <button onClick={() => setMobileMenu(true)}>
        <svg
          width="25"
          height="18"
          viewBox="0 0 25 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="25" height="2" fill="#222222" />
          <rect y="8" width="20" height="2" fill="#222222" />
          <rect y="16" width="25" height="2" fill="#222222" />
        </svg>
      </button>
      <Link to="/">
        <Image src="images/logo.png" alt="logo" />
      </Link>
      <div className="relative">
        <button>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6869 4.6875H15.3021C14.9912 2.05164 12.74 0 10.0174 0C7.29479 0 5.04353 2.05164 4.73264 4.6875H2.3478C1.91556 4.6875 1.56519 5.03727 1.56519 5.46875V19.2188C1.56519 19.6502 1.91556 20 2.3478 20H17.6869C18.1192 20 18.4696 19.6502 18.4696 19.2188V5.46875C18.4696 5.03727 18.1192 4.6875 17.6869 4.6875ZM10.0174 1.5625C11.8754 1.5625 13.4225 2.91621 13.7214 4.6875H6.31332C6.61228 2.91621 8.1593 1.5625 10.0174 1.5625ZM16.9043 18.4375H3.13041V6.25H4.69563V8.59375C4.69563 9.02523 5.046 9.375 5.47824 9.375C5.91047 9.375 6.26084 9.02523 6.26084 8.59375V6.25H13.7739V8.59375C13.7739 9.02523 14.1243 9.375 14.5565 9.375C14.9887 9.375 15.3391 9.02523 15.3391 8.59375V6.25H16.9043V18.4375Z"
              fill="#222222"
            />
          </svg>
        </button>
        <span className="font-jost bg-thirdcolor text-primary-white absolute bottom-0 left-3 rounded-full px-1.25 text-[10px] font-medium">
          {cartItems}
        </span>
      </div>

      <div
        className={`bg-primary-white absolute top-0 ${mobileMenu ? "left-0" : "-left-full"} z-50 h-screen w-full duration-300`}
      >
        <button
          className="absolute top-3 right-3"
          onClick={() => setMobileMenu(false)}
        >
          <IoMdClose size={30} />
        </button>
        <ul className="flex flex-col gap-5 p-10">
          {navitems?.map((item) => (
            <li className="list-item" key={item.id}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
