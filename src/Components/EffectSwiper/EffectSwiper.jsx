import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../EffectSwiper/EffectSwiper.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import picEffect from "../../../public/imagePro/15.jpg";
import picEffect1 from "../../../public/imagePro/17.jpg";
import comings from "../../../public/imagePro/comingsoon.png";

const dataEffectSwiper = [
  {
    id: 1,
    linkGitHub: "https://github.com/arashsharifi/project_reduxToolkit_fastfood",
    title: "project_reduxToolkit_fastfood",
    vercel: "https://project-redux-toolkit-fastfood.vercel.app/",
    img: picEffect,
  },
  {
    id: 2,
    linkGitHub: "https://github.com/arashsharifi/dashboardAdminfull",
    vercel: "https://dashboard-adminfull.vercel.app/",
    img: picEffect1,
  },
  {
    id: 3,
    linkGitHub: "comingsoon",
    vercel: "comingsoon",
    img: comings,
  },
  {
    id: 4,
    linkGitHub: "comingsoon",
    vercel: "comingsoon",
    img: comings,
  },
];

export default function EffectSwiper() {
  const [datas, setDatas] = useState(dataEffectSwiper);
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {datas.map((data) => (
          <SwiperSlide className="swiperv" key={data.id}>
            <div className="flex flex-col gap-2 bg-white rounded-lg mx-auto overflow-hidden shadow-xl p-2 max-w-[70%] h-[80%]   ">
              <div className="w-fit h-fit">
                <img className="w-full h-full" src={data.img} />
              </div>
              <div className=" hidden md:flex gap-2 ">
                <p className=" ">link-github:</p>
                <a
                  href={data.linkGitHub}
                  className="duration-200 hover:text-ferveritPink hover:underline"
                >
                  {data.title}
                </a>
              </div>
              <div className="w-[80%] mx-auto flex items-center md:hidden ">
                <a
                  href={data.linkGitHub}
                  className="w-full bg-transparent border-ferveritPink border-2 rounded-lg text-ferveritPink text-center active:bg-ferveritPink active:text-white"
                >
                  github link
                </a>
              </div>
              <div className="w-[80%] mx-auto flex items-center md:hidden ">
                <a
                  href={data.vercel}
                  className="w-full bg-transparent border-yellow-600 border-2 rounded-lg text-yellow-600 text-center active:bg-yellow-600 active:text-white"
                >
                  deploy
                </a>
              </div>
              <div className=" hidden md:flex gap-2 ">
                <p className=" font-bold  ">deploy:</p>
                <a
                  href={data.vercel}
                  className="duration-200 hover:text-yellow-600 hover:underline"
                >
                  click this link
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
