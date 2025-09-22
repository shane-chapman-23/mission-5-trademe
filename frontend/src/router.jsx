import {createBrowserRouter} from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Listing from "./pages/Listing/Listing.jsx";
import Marketplace from "./pages/Marketplace/Marketplace.jsx";

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
      {
        path: "marketplace",
        Component: Marketplace,
      },
    ],
  },
]);

export default router;
