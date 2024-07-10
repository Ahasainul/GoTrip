import logo from "../assets/logo.png";
import Image from "../component/Image";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import Darkmood from "../component/Darkmood";

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
                  className="border rounded-full w-[200px] sm-[200px] group-hover:w-[300px] px-2 py-1 transition-all duration-300 focus:outline-none focus:border-1 focus:border-primary"
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
              <Darkmood/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Naver;
