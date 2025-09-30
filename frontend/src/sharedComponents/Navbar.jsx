import {useState} from "react";
import {useNavigate} from "react-router-dom";
//icons
import logo from "../assets/tm-logo.svg";
import categories from "../assets/icons/categories.svg";
import notifications from "../assets/icons/notifications.svg";
import watchList from "../assets/icons/watchList.svg";
import favourites from "../assets/icons/favourites.svg";
import startListing from "../assets/icons/startListing.svg";
import signUp from "../assets/icons/signUp.svg";
import logIn from "../assets/icons/logIn.svg";

import magnifyingGlass from "../assets/icons/magnifyingGlass.svg";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/marketplace?search=${encodeURIComponent(query)}`);
  };
  return (
    <>
      <header>
        <nav className="bg-[#f6f5f4] h-[81px] border-b-1 border-[#e8e6e3] ">
          <div className="mr-auto ml-auto px-[140px] max-w-[1600px] h-full flex items-center justify-between">
            <div className="flex  w-full  ">
              <div className="mr-[8px] flex items-center">
                <img
                  src={logo}
                  alt="Trademe Logo"
                  className="min-w-[190px] max-h-[25px] cursor-pointer"
                />
              </div>
              <div className="bg-white h-[40px] w-[514.4px] mr-[8px] px-[14px] rounded-full grow shrink basis-auto cursor-text  ">
                <form
                  onSubmit={handleSubmit}
                  className=" h-full flex items-center"
                >
                  <img
                    src={magnifyingGlass}
                    className="h-[16px] w-[16px] mr-[12px]"
                  />
                  <input
                    type="text"
                    placeholder="Search all of Trade Me"
                    className=" text-[16px] text-[#5a5653] w-full grow shrink basis-auto outline-none"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
              </div>
              <ul className="flex text-[#2f2c28]">
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={categories} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap ">
                    Categories
                  </span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={watchList} className="h-[16px] w-[16px]" />
                  <span className="text-[14px]  whitespace-nowrap">
                    Watchlist
                  </span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={favourites} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">
                    Favourites
                  </span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={startListing} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">
                    Start a listing
                  </span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={signUp} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">Sign Up</span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={logIn} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">Log In</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
