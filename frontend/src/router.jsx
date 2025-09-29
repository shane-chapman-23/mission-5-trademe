import { createBrowserRouter, redirect } from "react-router-dom";
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
      // {
      //   path: "listing",
      //   Component: Listing,
      // },
      {
        path: "marketplace",
        Component: Marketplace,
      },
      {
        path: "listing/:id",
        Component: Listing,
      },
      // (optional) plain /listing -> redirect to /marketplace
      // {
      //   path: "listing",
      //   loader: () => redirect("/marketplace"),
      // },
      // (optional) 404
      // { path: "*", Component: NotFound }
    ],
  },
]);

export default router;
