import Navbar from "./sharedComponents/Navbar";
import Footer from "./sharedComponents/Footer";

import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
