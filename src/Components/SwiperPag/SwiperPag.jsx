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
import pic1 from "../../../public/imagePro/2.jpg";
import pic2 from "../../../public/imagePro/3.jpg";
import pic3 from "../../../public/imagePro/4.jpg";
import pic4 from "../../../public/imagePro/5.jpg";
import pic5 from "../../../public/imagePro/6.jpg";
import pic6 from "../../../public/imagePro/7.jpg";
import pic7 from "../../../public/imagePro/8.jpg";
import pic8 from "../../../public/imagePro/9.jpg";
import pic9 from "../../../public/imagePro/10.jpg";
import pic10 from "../../../public/imagePro/11.jpg";
import pic11 from "../../../public/imagePro/12.jpg";
import pic12 from "../../../public/imagePro/13.jpg";
import pic13 from "../../../public/imagePro/14.jpg";

const swiperDataProjects1 = [
  {
    id: 1,
    img: pic,
    title: "final-Project-maketab-React",
    herefAddress: "https://github.com/arashsharifi/final_project_react",
  },
  {
    id: 2,
    img: pic12,
    title: "Project-cms-persian",
    herefAddress: "https://github.com/arashsharifi/project_cms_persian",
  },
  {
    id: 3,
    img: pic1,
    title: "final-Project-maketab-js",
    herefAddress: "https://github.com/arashsharifi/data-base_finalproject_js",
  },
  {
    id: 4,
    img: pic2,
    title: "mini-project_redux_yupformik_form validation",
    herefAddress:
      "https://github.com/arashsharifi/mini_project_redux_yupFormik_from",
  },
  {
    id: 5,
    img: pic3,
    title: "Hamra weather conditions api",
    herefAddress:
      "https://github.com/arashsharifi/miniproject_weather-condition",
  },
  {
    id: 6,
    img: pic4,
    title: "miniproject_Registrant number",
    herefAddress:
      "https://github.com/arashsharifi/miniproject_Registrant-number",
  },
  {
    id: 7,
    img: pic5,
    title: "miniProject_productPage",
    herefAddress: "https://github.com/arashsharifi/miniproject_pageProduct",
  },
  {
    id: 8,
    img: pic6,
    title: "miniproject_todolist_useReducer()",
    herefAddress:
      "https://github.com/arashsharifi/miniProject_todoListReducer-",
  },
  {
    id: 9,
    img: pic7,
    title: "miniproject_React-noteList",
    herefAddress: "https://github.com/arashsharifi/miniproject_noteListReact",
  },
  {
    id: 10,
    img: pic8,
    title: "miniproject_diamondTimer",
    herefAddress: "https://github.com/arashsharifi/miniProject_diamondTimer",
  },
  {
    id: 11,
    img: pic9,
    title: "miniproject_galleryMovie",
    herefAddress: "https://github.com/arashsharifi/miniProject_galleryMovie",
  },
  {
    id: 12,
    img: pic10,
    title: "miniproject_coffeeBar",
    herefAddress: "https://github.com/arashsharifi/miniProject_coffeeBar",
  },
  {
    id: 13,
    img: pic11,
    title: "miniproject_todoListDummyData",
    herefAddress:
      "https://github.com/arashsharifi/miniProject_todoListDummyData",
  },
  {
    id: 14,
    img: pic13,
    title: "responsive-purecss",
    herefAddress: "https://github.com/arashsharifi/responsivePurecss.git",
  },
];

export default function SwiperPag() {
  const [swiperDatas, setSwiperDatas] = useState(swiperDataProjects1);
  return (
    <>
      <div className=" flex items-center justify-center mt-5 z-30 ">
        <h1 className="  text-lg md:text-2xl italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
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
