import logo from "../assets/logo.png";
import Image from "../component/Image";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";

import Darkmood from "../component/Darkmood";
import { Link } from "react-router-dom";
const Manu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronice",
    link: "/#",
  },
];
const DropdownLink = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Naver = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-2 ">
              <Image className={"w-16"} src={logo} alt={logo.png} />
              <span className="font-bold text-[30px]">Shopsy</span>
            </div>
            <div className="flex gap-x-5">
              <div className="group relative hidden sm:block">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="search"
                  className="border rounded-full w-[200px] sm-[200px] group-hover:w-[300px] px-2 py-1 transition-all duration-300 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-400 dark:bg-gray-800"
                />
                <FaSearch className="group-hover:text-primary absolute top-1/2 -translate-y-1/2 text-gray-500 right-3" />
                <div className=""></div>
              </div>
              <div className=" flex items-center gap-5">
                <button
                  onClick={() => alert("Oradering ont avalible yet")}
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                >
                  <span className="group-hover:block hidden font-bold transition-all duration-300">
                    Ordar{" "}
                  </span>
                  <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer  " />
                </button>
                <Darkmood />
              </div>
            </div>
          </div>
        </div>
        {/* ////// */}
        <div className="flex justify-center">
          <ul className=" sm:flex hidden items-center gap-4 ">
            {Manu.map((data) => (
              <li key={data.id}>
                <Link
                  className="inline-block px-4 hover:text-primary duration-200"
                  to={data.link}
                >
                  {data.name}
                </Link>
              </li>
            ))}
            <li className="group relative cursor-pointer">
              <Link className="flex gap-[2px] py-2 items-center hover:text-primary   transition-all duration-200    " to={"/"}>
                Trending
                <span className="">
                  <FaAngleDown className="group-hover:rotate-180" />
                </span>
              </Link>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 shadow-md text-black">
                <ul>
                  {DropdownLink.map((data) => (
                    <li key={data.id}>
                      <Link to={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Naver;
