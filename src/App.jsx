import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { dataAboutCategory } from "./data";
import { useRoutes } from "react-router-dom";
import { AppRoute } from "./routes";

export default function App() {
  return <AppRoute />;
}
