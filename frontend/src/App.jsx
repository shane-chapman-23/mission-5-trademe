import Navbar from "./sharedComponents/navBar";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
