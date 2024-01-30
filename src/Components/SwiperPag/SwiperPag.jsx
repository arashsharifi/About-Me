import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../SwiperPag/SwiperPag.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { swiperDataProjects } from "../../data";

import pic from "../../../public/imagePro/pro1.jpg";

const swiperDataProjects1 = [
  {
    id: 1,
    img: pic,
    title: "final-Project-maketab-React",
    herefAddress: "https://github.com/arashsharifi/final_project_react",
  },
  {
    id: 2,
    img: pic,
    title: "final-Project-maketab-js",
    herefAddress: "https://github.com/arashsharifi/final_project_react",
  },
  {
    id: 3,
    img: pic,
    title: "mini-project",
    herefAddress: "https://github.com/arashsharifi/final_project_react",
  },
  {
    id: 4,
    img: pic,
    title: "mini-project-two",
    herefAddress: "https://github.com/arashsharifi/final_project_react",
  },
  {
    id: 5,
    img: pic,
    title: "homePage",
    herefAddress: "https://github.com/arashsharifi/final_project_react",
  },
];

export default function SwiperPag() {
  const [swiperDatas, setSwiperDatas] = useState(swiperDataProjects1);
  return (
    <>
      <div className=" flex items-center justify-center mt-5 ">
        <h1 className="  text-2xl italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
          Image gallery with swiper slider
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {swiperDatas.map((swiperdata) => (
          <SwiperSlide key={swiperdata.id}>
            <div className="relative">
              <img src={swiperdata.img} />
              <p className="bg-white p-3 shadow-xl text-center">
                {swiperdata.title}
              </p>
              <a
                className="absolute bg-slate-200 opacity-70 w-full p-3 text-center text-sm text-blue-500 rounded-md shadow-md top-40 left-0"
                href={swiperdata.herefAddress}
                target="blank"
              >
                {swiperdata.herefAddress}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// SwiperPag
