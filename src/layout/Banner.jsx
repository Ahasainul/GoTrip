import React from "react";
import lady from "../assets/img1.jpg";
import { GrSecure ,GrSend ,GrSelect  } from "react-icons/gr";
const Banner = () => {
  return (
    <div className="min-h-[55px] mt-[300px] flex justify-center items-center my-20 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
          <div className=" my-8" data-aos="zoom-in">
            <img
              src={lady}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto shadow-2xl object-cover"
            />
          </div>
          <div className=" flex flex-col justify-center gap-6 ">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p className=" text-sm text-gray-500 tracking-wider leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className=" ">
              <div className=" flex items-center pb-3 gap-5 " data-aos="fade-up">
                <GrSecure className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Quality Products</p>
              </div>
              <div className=" flex items-center pb-3 gap-5" data-aos="fade-up">
                <GrSelect  className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Fast Delivery</p>
              </div>
              <div className=" flex items-center  pb-3 gap-5" data-aos="fade-up">
                <GrSend  className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Easy Payment method</p>
              </div>
              <div className=" flex items-center gap-5" data-aos="fade-up">
                <GrSecure className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
