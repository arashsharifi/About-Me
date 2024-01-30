import React from "react";
import SwiperPag from "../../Components/SwiperPag/SwiperPag";
import { LiaUniversitySolid } from "react-icons/lia";
import { BiSolidFactory } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";
import { FaCheck } from "react-icons/fa6";
export default function WorkSampels() {
  return (
    <div className="flex w-full flex-col font-comfortaa mt-20">
      <div className="bg-blue-200 flex flex-col  m-5 rounded-lg">
        <div>
          <h1 className="text-center text-2xl text-violet-700 mt-5 ">
            Welcome to the gallery of my projects and my works{" "}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="w-[80%] mx-auto flex flex-col gap-1   md:w-[30%] my-10   bg-white border-ferveritPink border-2 p-3 rounded-lg shadow-xl shadow-ferveritPink">
            <LiaUniversitySolid className="text-4xl" />
            <p className="text-ferveritPink text-lg font-bold italic">
              Lorem ipsum dolor sit.
            </p>
            <p className="max-w-[90%] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              molestiae ut ratione amet dolorem quas fugit mollitia illum alias
              ea!
            </p>
          </div>
          <div className=" w-[80%] mx-auto flex flex-col md:w-[30%] my-10  bg-white border-ferveritPink border-2 p-3 rounded-lg shadow-xl shadow-ferveritPink">
            <LiaUniversitySolid className="text-4xl" />

            <p className="max-w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              molestiae ut ratione amet dolorem quas fugit mollitia illum alias
              ea!
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[100%] mx-auto">
        <SwiperPag />
      </div>
    </div>
  );
}
