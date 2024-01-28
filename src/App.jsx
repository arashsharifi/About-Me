import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { dataAboutCategory } from "./data";
import { useRoutes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import WorkSampels from "./pages/WorkSampels/WorkSampels";
import MySkillsPage from "./pages/MySkillsPage/MySkillsPage";

export default function App() {
  const [category, setCategory] = useState(dataAboutCategory);

  let router = useRoutes([
    { path: "/", element: <AboutPage /> },
    { path: "/worksampels", element: <WorkSampels /> },
    { path: "/myskills", element: <MySkillsPage /> },
  ]);
  return (
    <div className="flex flex-col">
      <Header category={category} />
      <div className="bg-blue-400 w-full mt-20">sfaf{router}</div>
    </div>
  );
}
