import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import BuilderPage from "./pages/builder-page";
import { Details } from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/builder-demo",
    element: <BuilderPage />,
  },
]);

export { router };
