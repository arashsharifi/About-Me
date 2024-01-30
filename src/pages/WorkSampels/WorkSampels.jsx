import React from "react";
import SwiperPag from "../../Components/SwiperPag/SwiperPag";
import { LiaUniversitySolid } from "react-icons/lia";
import maktabPic from "../../../public/imagePro/qq.jpg";
import { GrDocumentUser } from "react-icons/gr";
import { FcSearch } from "react-icons/fc";
import { FaInternetExplorer } from "react-icons/fa";
import { BiSolidFactory } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";
import { FaCheck } from "react-icons/fa6";
export default function WorkSampels() {
  return (
    <div className="flex w-full flex-col font-comfortaa mt-20">
      <div className="bg-blue-200 flex flex-col  m-5 rounded-lg">
        <div>
          <h1 className="text-center text-2xl  text-violet-700 mt-5 ">
            Welcome to the gallery of my projects and my works{" "}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="w-[80%] mx-auto flex flex-col gap-1   md:w-[30%] my-10   bg-white border-ferveritPink border-2 p-3 rounded-lg shadow-xl shadow-ferveritPink">
            <div className="flex gap-3">
              <GrDocumentUser className="text-4xl text-ferveritPink mt-4" />
              <FaInternetExplorer className="text-4xl text-ferveritPink mt-4" />
              <FcSearch className="text-4xl text-ferveritPink mt-4" />
            </div>
            <p className="text-ferveritPink text-lg font-bold italic mt-5">
              self-reading
            </p>
            <p className="max-w-[90%] text-md mt-7">
              I wanted to make it clear that self-reading is the most important
              skill that every letter writer should have in order to improve her
              work.
            </p>
          </div>
          <div className=" w-[80%] mx-auto flex flex-col md:w-[30%] my-10  bg-white border-ferveritPink border-2 p-3 rounded-lg shadow-xl shadow-ferveritPink">
            <img className="w-20 h-20" src={maktabPic} alt="nooote" />
            <p className="text-ferveritPink text-lg font-bold italic">
              Educational camp of Sharif school
            </p>
            <p className="max-w-[90%] m-2">
              I would like to explain that most of my projects and mini-projects
              were in the boot camp that I went to and I had a lot of group
              work.
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
