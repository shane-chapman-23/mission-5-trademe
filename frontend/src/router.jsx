import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Listing from "./pages/Listing/Listing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "listing",
        Component: Listing,
      },
    ],
  },
]);

export default router;
