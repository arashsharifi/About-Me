import React, { useState } from "react";
import { aboutPresonData } from "../../data";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LiaAddressCardSolid } from "react-icons/lia";
import pic2 from "../../../public/images/1.jpg";
import pic3 from "../../../public/images/2.jpg";
export default function AboutPage() {
  const [aboutPreson, setAboutPreson] = useState(aboutPresonData[0]);
  console.log(aboutPreson.img);
  const pic =
    "w-[70%] bg-red-200 md:w-[75%] h-[30%] md:h-[75%] rounded-lg shadow-lg border-4";
  return (
    <div className=" mt-12 flex flex-col md:flex-row     justify-around p-5">
      <div className="w-[80%]  md:w-[30%] mx-auto md:mx-0  flex items-center justify-center ">
        <div className={pic}>
          <img className="w-full h-full" src={pic2} alt="nooot" />
        </div>
      </div>
      <div className="flex flex-col mx-auto md:mx-0 justify-center gap-5 p-4 m-4 rounded-lg shadow-2xl shadow-gray-600 w-[90%] md:w-[60%]  bg-ferveritPink text-white pl-8 font-comfortaa">
        <h1 className="mb-10">HELLOW I AM </h1>
        <h2 className="text-4xl font-bold">{aboutPreson.name}</h2>
        <h3 className="text-3xl">{aboutPreson.lastname}</h3>
        <p className=" max-w-[600px]">{aboutPreson.desc}</p>
        <div className="flex gap-2">
          <a className="text-2xl" href="#">
            <FaTelegram className="w-full" />
          </a>
          <a className="text-2xl" href="#">
            <FaInstagram className="w-full" />
          </a>
          <a className="text-2xl" href="#">
            <FaLinkedin className="w-full" />
          </a>
        </div>
        <div className="flex gap-3 p-1 items-center">
          <div className="flex gap-2  items-center ">
            <FaPhoneAlt />
            <p>phone:</p>
          </div>
          <p>{aboutPreson.phone}</p>
        </div>
        <div className=" ml-1 flex gap-3 p-1 items-center">
          <div className="flex gap-2  items-center ">
            <MdEmail />
            <p>gmail:</p>
          </div>
          <p className="text-[13px] md:text-md">{aboutPreson.gmail}</p>
        </div>
        <div className="flex gap-3 p-1 items-center">
          <div className="flex gap-2  items-center ">
            <LiaAddressCardSolid className="text-2xl" />
            <p>address:</p>
          </div>
          <p>{aboutPreson.address}</p>
        </div>
      </div>
    </div>
  );
}
