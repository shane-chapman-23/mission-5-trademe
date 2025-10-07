import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App.jsx";
import Listing from "./pages/Listing/Listing.jsx";
import Marketplace from "./pages/Marketplace/Marketplace.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Marketplace,
      },
      {
        path: "listing/:id",
        Component: Listing,
      },
    ],
  },
]);

export default router;
