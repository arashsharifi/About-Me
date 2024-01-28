import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { dataAboutCategory } from "./data";

export default function App() {
  const [category, setCategory] = useState(dataAboutCategory);
  return (
    <>
      <Header category={category} />
      <div className=" bg-gray-200 w-full h-screen"></div>
    </>
  );
}
