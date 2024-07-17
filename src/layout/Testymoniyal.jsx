import React from "react";
import Slider from "react-slick";

const testmun = [
  {
    id: 1,
    name: "ahasainul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "asif",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "	https://picsum.photos/103/103",
  },
  {
    id: 3,
    name: "adnan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "	https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "asif",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "	https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "adnan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "	https://picsum.photos/103/103",
  },
];
const Testymoniyal = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    Responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="text-center mb-20  pt-20 max-w-[600px] mx-auto">
        <p className="text-sm text-primary">What our customers are saying</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Testimonials
        </h1>
        <p data-aos="fade-up" className="text-xs py-3 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {testmun.map((data) => (
            <div className="">
              <div  key={data.id} className="flex flex-col gap-4 mx-auto  py-8 rounded-md   px-6 shadow-xl w-[600px] " >
                <div className="">
                  <img
                    className="rounded-full w-20 h-20"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-xs  text-gray-400">{data.text}</p>
                  <h1 className="font-bold text-xl pt-5 ">{data.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testymoniyal;
