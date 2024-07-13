import React from "react";
import img6 from "../assets/banner1.png";
import img7 from "../assets/banner2.png";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img2.jpg";
import img4 from "../assets/img3.jpg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const ProductsData = [
  {
    id: 1,
    img: img6,
    title: " Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: " Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: " Goggles",
    rating: 4.7,
    color: "Yellow",
    aosDelay: "800",
  },
  {
    id: 4,
    img: img4,
    title: " Printed T-Shirt",
    rating: 4.9,
    color: "Green",
    aosDelay: "800",
  },
  {
    id: 5,
    img: img7,
    title: " Fashin T-Shirt",
    rating: 5.0,
    color: "Yellow",
    aosDelay: "800",
  },
];
const Prodect = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="text-center mb-10  pt-10 max-w-[600px] mx-auto">
        <p className="text-sm text-primary">Top selling pProducts for you</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>
        <p data-aos="fade-up" className="text-xs py-3 text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          excepturi placeat nisi et nam.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2 container">
          {ProductsData.map((data) => (
            <>
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-lg text-gray-600">{data.color}</p>
                  <div className=" flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span> {data.rating}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prodect;
