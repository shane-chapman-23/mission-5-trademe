import Navbar from "./sharedComponents/navBar";
import Footer from "./sharedComponents/Footer";
import {Outlet} from "react-router";
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
