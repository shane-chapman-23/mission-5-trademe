import logo from "../assets/tm-logo.svg";
import categories from "../assets/icons/categories.svg";
import notifications from "../assets/icons/notifications.svg";
import watchList from "../assets/icons/watchList.svg";
import favourites from "../assets/icons/favourites.svg";
import startListing from "../assets/icons/startListing.svg";
import magnifyingGlass from "../assets/icons/magnifyingGlass.svg";

function Navbar() {
  return (
    <>
      <header>
        <nav className="bg-[#f6f5f4] h-[81px] border-b-1 border-[#e8e6e3] ">
          <div className="mr-auto ml-auto px-[140px] max-w-[1600px] h-full flex items-center justify-between">
            <div className="flex  w-full  ">
              <div className="mr-[8px] flex items-center">
                <img src={logo} alt="Trademe Logo" className="w-[190px] h-[25px]" />
              </div>
              <div className="bg-white h-[40px] w-[514.4px] mr-[8px] px-[14px] rounded-full grow shrink basis-auto cursor-text  ">
                <div className=" h-full flex items-center">
                  <img src={magnifyingGlass} className="h-[16px] w-[16px] mr-[12px]" />
                  <input type="text" placeholder="Search all of Trade Me" className=" text-[16px] text-[#5a5653] w-full grow shrink basis-auto" />
                </div>
              </div>
              <ul className="flex">
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center ">
                  <img src={categories} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap text-[#2f2c28]">Categories</span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center ">
                  <img src={notifications} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">Notifications</span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center ">
                  <img src={watchList} className="h-[16px] w-[16px]" />
                  <span className="text-[14px]  whitespace-nowrap">Watchlist</span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center ">
                  <img src={favourites} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">Favourites</span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center ">
                  <img src={startListing} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">Start a listing</span>
                </li>
                <li className="px-[12px] h-[42px] flex flex-col items-center justify-center ">
                  <img src={categories} className="h-[16px] w-[16px]" />
                  <span className="text-[14px] whitespace-nowrap">My Trade Me</span>
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
