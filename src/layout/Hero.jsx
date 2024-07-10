import React from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: banner1,
    title: "30% off on all Women",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: banner2,
    title: "50% off on all Women",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: banner3,
    title: "70% off on all Women",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit,  dolore magna aliqua.",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 5000 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* //// */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((item) => (
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                     {item.title}
                    </h1>
                    <p className="text-sm">
                     {item.description}
                    </p>
                    <div className="">
                      <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-4 rounded-full hover:scale-105">
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* // */}
                  <div className="order-1 sm:order-2 ">
                    <div className="relative z-10">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]  sm:scale-125 lg:scale-125 object-contain mx-auto "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
