import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <Header />
      <Outlet />
      <div className="flex w-full h-full bg-green-400 mt-12">
        <Footer />
      </div>
    </div>
  );
}
