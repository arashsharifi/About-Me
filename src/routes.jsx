import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import MySkillsPage from "./pages/MySkillsPage/MySkillsPage";
import WorkSampels from "./pages/WorkSampels/WorkSampels";
import NotFound from "./pages/NotFound/NotFound";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/About-Me/",
        element: <AboutPage />,
      },
      {
        path: "/myskills",
        element: <MySkillsPage />,
      },
      {
        path: "/WorkSample",
        element: <WorkSampels />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export const AppRoute = () => {
  return <RouterProvider router={routes} />;
};
