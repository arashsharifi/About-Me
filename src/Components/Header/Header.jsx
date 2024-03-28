import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";
import Button from "../Button/Button";
import { dataAboutCategory } from "../../data";

export default function Header() {
  const [category, setCategory] = useState(dataAboutCategory);

  const [mainCategory, setMainCategory] = useState("about");

  let [open, setOpen] = useState(false);

  console.log(mainCategory);

  const sameStyle =
    "ml-4 my-5 md:my-0 text-gray-800 hover:text-gray-400 duration-300";
  const checkStyle =
    "cursor-pointer text-white bg-ferveritPink px-2 py-1 rounded-lg";
  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-comfortaa z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center ">
          <span className="text-2xl">
            <AiFillThunderbolt className="text-ferveritPink" />
          </span>
          ArashSharifi
        </div>
        <div
          onClick={() => setOpen((prevState) => !prevState)}
          className=" block md:hidden text-3xl absolute right-8 top-6 cursor-pointer"
        >
          <RxHamburgerMenu className="w-full" />
        </div>
        <ul
          className={`md:flex pb-12 md:pb-0  gap-5 md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } `}
        >
          {category.map((cat) => (
            <li
              onClick={() => {
                setMainCategory(cat.category);
                setOpen((prevState) => !prevState);
              }}
              className={cat.category === mainCategory ? checkStyle : sameStyle}
              key={cat.id}
            >
              <Link to={cat.to}>{cat.title}</Link>
            </li>
          ))}
          <Button>get started</Button>
        </ul>
      </div>
    </div>
  );
}
