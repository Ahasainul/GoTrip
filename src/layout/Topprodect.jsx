import React from "react";
import img1 from "../assets/shart.png";
import img2 from "../assets/shart1.png";
import img3 from "../assets/shrttow.png";
import { FaStar } from "react-icons/fa";

const Prodacts = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    dic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sint ipsam voluptates eos, magni nulla molestias dolorum consectetur accusamus obcaecat,",
  },
  {
    id: 2,
    img: img2,
    title: "Women shirt",
    dic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sint ipsam voluptates eos, magni nulla molestias dolorum consectetur accusamus obcaecat,",
  },
  {
    id: 3,
    img: img3,
    title: "Printed shirt",
    dic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sint ipsam voluptates eos, magni nulla molestias dolorum consectetur accusamus obcaecat,",
  },
];

const Topprodect = () => {
  return (
    <>
      <div className="container">
        <div className="text-left mb-10  py-20 ">
          <p className="text-sm text-primary">Top Rated Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs py-3 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-content-center">
          {Prodacts.map((data, index) => (
            <div data-aos='zoom-in' className="h-[100px]" key={index}>
              <div className=" rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[350px]">
                <div className="">
                  <img
                    className="max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  
                    src={data.img}
                    alt=""
                  />
                </div>
                {
                  <div className="pb-5 text-center">
                    <div className="w-full flex justify-center items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="font-bold  text-xl">
                      {data.title}
                    </h1>
                    <p className=" text-gray-500  group-hover:text-white duration-300 text-sm line-clamp-2 px-4">{data.dic}</p>
                    <button className="bg-primary hover:scale-105 duration-300 text-white py-1 mt-5 px-4 group-hover:bg-white group-hover:text-primary rounded-xl font-semibold"
                    >Order Now</button>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Topprodect;
