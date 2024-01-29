import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { BiSolidFactory } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";
import { FaCheck } from "react-icons/fa6";
import SkillBar from "../../Components/SkillBar/SkillBar";
import html from "../../../public/images/html.png";
import css from "../../../public/images/css.png";
import java from "../../../public/images/java.png";
import react from "../../../public/images/react.png";
import tailwind from "../../../public/images/tai.png";
import mui from "../../../public/images/mui.png";
import npm from "../../../public/images/npm.png";
import vite from "../../../public/images/vite.png";

export default function MySkillsPage() {
  return (
    <div className="mt-20 w-full   flex flex-col gap-4 items-center justify-center  gap-3 p-4">
      <div className="flex flex-col md:flex-row justify-around">
        <div className=" flex items-center justify-center w-[100%] md:w-[50%] ">
          <SkillBar />
        </div>
        <div className="flex bg-gradient-to-t text-white from-sky-400 to-ferveritPink flex-col md:w-[40%]  gap-5 items-center justify-center  p-4 border-2 border-ferveritPink bg-white mt-10 md:mt-0 rounded-lg shadow-lg  ">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 ">
              <img className="w-10 h-10" src={html} alt="noot" />
              <img className="w-10 h-10 mt-1" src={css} alt="noot" />
            </div>
            <p>
              From the beginning, I tried to understand HTML and created many
              templates with HTML and CSS in order to understand the basics of
              these two well.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 ">
              <img className="w-10 h-10" src={java} alt="noot" />
              <img className="w-10 h-10 mt-1" src={react} alt="noot" />
            </div>
            <p>
              The first letter writing language that I became interested in was
              Java Script. I tried to understand the concepts of functions well
              in order to learn React functional component analysis well
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 ">
              <img className="w-10 h-10" src={tailwind} alt="noot" />
              <img className="w-10 h-10 mt-1" src={mui} alt="noot" />
              <img className="w-10 h-10 mt-1" src={vite} alt="noot" />
              <img className="w-10 h-10 mt-1" src={npm} alt="noot" />
            </div>
            <p>
              Also, I learned a lot of frameworks, how to install them,
              establish a good relationship with the package manager, and used
              ready-made components for React.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className="flex flex-col p-4">
          <h1 className="self-start text-3xl text-ferveritPink">
            About MySelf
          </h1>
          <p className="text-ferveritPink">
            My interest in front-end programming and my choice of React is due
            to its ease of use, strong community, strong ecosystem, and use in
            large enterprises. React is a powerful framework for developing
            professional user interfaces, and with JavaScript skills, you can
            get started quickly. Also, with an active community and plenty of
            educational resources, there's always room to learn and update.
          </p>
        </div>
        <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-2 justify-between p-3  ">
          <div className=" w-full flex flex-col items-center gap-2 bg-sky-400 shadow-xl shadow-gray-400   p-2 rounded-lg m-1">
            <LiaUniversitySolid className="text-5xl md:text-[50px] md:self-start text-ferveritPink" />
            <p className="text-md self-start ml-2 font-bold">University</p>
            <div className=" self-start flex gap-2">
              <FaCheck className="text-[5xp] text-white" />
              <p className="text-white">Hashtgerd Azad University</p>
            </div>
            <div className="flex gap-2">
              <FaCheck className="text-[5xp] text-white" />
              <p className="text-white">
                Study field of architectural engineering, building design
              </p>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center gap-2 bg-sky-400 shadow-xl shadow-gray-400   p-2 rounded-lg m-1">
            <BiSolidFactory className="text-5xl md:text-[50px] md:self-start text-ferveritPink" />
            <p className="text-md self-start ml-2 font-bold">University</p>
            <div className=" self-start flex gap-2">
              <FaCheck className="text-[5xp] text-white" />
              <p className="text-white">
                As an intern in the municipality, I was in charge of the map
                site
              </p>
            </div>
            <div className="flex gap-2">
              <FaCheck className="text-[5xp] text-white" />
              <p className="text-white">
                I also worked as a construction contractor
              </p>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center gap-2 bg-sky-400 shadow-xl shadow-gray-400   p-2 rounded-lg m-1">
            <TfiAgenda className="text-5xl md:text-[50px] md:self-start text-ferveritPink" />
            <p className="text-md self-start ml-2 font-bold">University</p>
            <div className=" self-start flex gap-2">
              <FaCheck className="text-[5xp] text-white" />
              <p className="text-white">
                Holder of front-end design degree from Sharif school boot camp
              </p>
            </div>
            <div className="flex gap-2">
              <FaCheck className="text-[5xp] text-white" />
              <p className="text-white">
                Holder of website design degree from Karaj Professional
                Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
