import React, { useEffect, useState } from "react";
import Image from "../component/Image";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import List from "../component/List";
import Flex from "../component/Flex";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";

const Naver = () => {
  let [all, setall] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://restcountries.com/v3.1/all");
      setall(data.data);
    }
    all();
  }),
    [];

  return (
    <>
      <div className="max-w-[1920px] mx-auto bg-[#13357B] py-5 px-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-10 items-center">
            <Image src={logo} alt={"logo.png"} />
            <div className="">
              <ul>
                <Flex>
                  <div className="flex items-center  relative">
                    <List
                      className={
                        "text-white font-jost text-base pr-12  font-bold  "
                      }
                      manuName={"Home"}
                    />
                    <FaCaretDown className="text-white text-base absolute left-12" />
                  </div>
                  <div className="flex items-center  relative">
                    <List
                      className={
                        "text-white font-jost text-base pr-12  font-bold "
                      }
                      manuName={" Categories"}
                    />
                    <FaCaretDown className="text-white text-base absolute left-[85px]" />
                  </div>
                  <List
                    className={"text-white font-jost text-base pr-8 font-bold "}
                    manuName={"Destination"}
                  />

                  <div className="flex items-center  relative">
                    <List
                      className={
                        "text-white font-jost text-base pr-12  font-bold "
                      }
                      manuName={"Blog"}
                    />
                    <FaCaretDown className="text-white text-base absolute left-9" />
                  </div>
                  <div className="flex items-center  relative">
                    <List
                      className={
                        "text-white font-jost text-base pr-12  font-bold "
                      }
                      manuName={"Pages"}
                    />
                    <FaCaretDown className="text-white text-base absolute left-12" />
                  </div>

                  <List
                    className={
                      "text-white font-jost text-base pr-8  font-bold "
                    }
                    manuName={"Contact"}
                  />
                </Flex>
              </ul>
            </div>
          </div>
          {/* ////// */}
          <div className=" flex items-center"> 
            <div className=" relative before:absolute before:h-6 before:top-0 before:left-[100px] before:w-1 before:bg-[#425D95] before:content-[''] ">
              <select className="outline-none border-none overflow-hidden bg-transparent text-white font-jost  ">
                <option
                  value=" city"
                  className="outline-none border-none overflow-hidden  text-base  "
                >
                  USD
                </option>
                {all.map((item) => (
                  <option
                    value=" city"
                    className="outline-none bg-zinc-800  text-center border-none overflow-hidden "
                  >
                    {" "}
                    {item.region}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-5 items-center">

                <div className="">
                <Image className={'ml-10'} src={flag} alt={'flag'}/>

                </div>
               <div className="">
               <select className="outline-none border-none overflow-hidden bg-transparent text-white font-jost  ">
                <option
                  value=" city"
                  className="outline-none border-none overflow-hidden  text-base  "
                >
                United Kingdom
                </option>
                {all.map((item) => (
                  <option
                    value=" city"
                    className="outline-none bg-zinc-800  text-center border-none overflow-hidden "
                  >
                    {" "}
                    {item.region}{" "}
                  </option>
                ))}
              </select>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Naver;
