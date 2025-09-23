import logo from "../assets/tm-logo.svg";
import startListing from "../assets/icons/startListing.svg";

import watchList from "../assets/icons/watchList.svg";
import favourites from "../assets/icons/favourites.svg";
import logOut from "../assets/icons/logOut.svg";
import marketplace from "../assets/icons/f-marketplace.svg";
import property from "../assets/icons/f-property.svg";
import motors from "../assets/icons/f-motors.svg";
import jobs from "../assets/icons/f-jobs.svg";
import services from "../assets/icons/f-services.svg";
import community from "../assets/icons/f-community.svg";
import shieldedLogo from "../assets/icons/shielded-logo.png";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="text-[#65605d] text-base leading-6 pt-4 bg-gray-100 border-t border-gray-300">
          <div className="mr-auto ml-auto px-[140px] max-w-[1600px]">
            <div className="flex mb-6 pb-4 border-b border-[#d7d5d2] items-center justify-between">
              <div className="w-full">
                <img src={logo} className="min-w-[190px] max-w-[25px] cursor-pointer" />
              </div>
              <ul className="w-full flex justify-end items-end gap-6 text-[#44413d] text-xs">
                <li className="w-fit h-[40px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={startListing} className="h-[16px] w-[16px]" />
                  <span className="whitespace-nowrap">Start a listing</span>
                </li>
                <li className="w-fit h-[40px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={watchList} className="h-[16px] w-[16px]" />
                  <span className="whitespace-nowrap">Watchlist</span>
                </li>
                <li className="w-fit h-[40px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={favourites} className="h-[16px] w-[16px]" />
                  <span className="whitespace-nowrap">Favourites</span>
                </li>
                <li className="w-fit h-[40px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={watchList} className="h-[16px] w-[16px]" />
                  <span className="whitespace-nowrap">My Trade Me</span>
                </li>
                <li className="w-fit h-[40px] flex flex-col items-center justify-center cursor-pointer">
                  <img src={logOut} className="h-[16px] w-[16px]" />
                  <span className="whitespace-nowrap">Log Out</span>
                </li>
              </ul>
            </div>
            {/* VERTICAL LINKS */}
            <div className="flex flex-wrap">
              {/* MARKETPLACE  */}
              <ul className="w-1/6 mb-6">
                <li className="flex items-center pb-2 text-[#44413d] text-sm font-medium">
                  <img src={marketplace} />
                  <p className="pl-2 cursor-pointer hover:underline">Marketplace</p>
                </li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Latest deals</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Stores</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Closing soon</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">$1 reserve</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Home & Living</li>
              </ul>
              {/* PROPERTY  */}
              <ul className="w-1/6 mb-6">
                <li className="flex items-center pb-2 text-[#44413d] text-sm font-medium">
                  <img src={property} />
                  <p className="pl-2 cursor-pointer hover:underline">Property</p>
                </li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">International property</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">News & guides</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Sold Properties</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">OneHub for agents</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Find a Real Estate Agent</li>
              </ul>
              {/* MOTORS  */}
              <ul className="w-1/6 mb-6">
                <li className="flex items-center pb-2 text-[#44413d] text-sm font-medium">
                  <img src={motors} />
                  <p className="pl-2 cursor-pointer hover:underline">Motors</p>
                </li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Browse all cars</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Other vehicles</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Buying & Selling</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Dealer news & info</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Sell my car</li>
              </ul>
              {/* JOBS  */}
              <ul className="w-1/6 mb-6">
                <li className="flex items-center pb-2 text-[#44413d] text-sm font-medium">
                  <img src={jobs} />
                  <p className="pl-2 cursor-pointer hover:underline">Jobs</p>
                </li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Browse categories</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Careers advice</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">JobSmart</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Advertisers advice</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Salary guide</li>
              </ul>
              {/* SERVICES  */}
              <ul className="w-1/6 mb-6">
                <li className="flex items-center pb-2 text-[#44413d] text-sm font-medium">
                  <img src={services} />
                  <p className="pl-2 cursor-pointer hover:underline">Services</p>
                </li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Trades</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Domestic services</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Events & entertainment</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Health & wellbeing</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">List my services</li>
              </ul>
              {/* COMMUNITY  */}
              <ul className="w-1/6 mb-6">
                <li className="flex items-center pb-2 text-[#44413d] text-sm font-medium">
                  <img src={community} />
                  <p className="pl-2 cursor-pointer hover:underline">Community</p>
                </li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Help</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Announcements</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Trust & safety</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Seller information</li>
                <li className="pl-6 h-6 flex items-center text-xs text-[#65605d] cursor-pointer hover:underline">Help center community</li>
              </ul>
            </div>
          </div>
        </div>
        {/* SECONDARY LINKS */}
        <div className="mr-auto ml-auto px-[140px] max-w-[1600px] bg-[#fff] ">
          <ul className="py-5 border-b border-[#d7d5d2] flex justify-between text-[#85807c] text-xs">
            <li className="leading-3 whitespace-nowrap hover:underline cursor-pointer">Trade Me Insurance</li>
            <li className="leading-3 whitespace-nowrap hover:underline cursor-pointer">homes.co.nz</li>
            <li className="leading-3 whitespace-nowrap hover:underline cursor-pointer">MotorWeb</li>
            <li className="leading-3 whitespace-nowrap hover:underline cursor-pointer">Holiday Houses</li>
            <li className="leading-3 whitespace-nowrap hover:underline cursor-pointer">FindSomeone</li>
          </ul>
        </div>
        {/* SECONDARY LINKS 2 */}
        <div className="mr-auto ml-auto px-[140px] max-w-[1600px] bg-[#fff]">
          <div className="flex justify-between items-center py-5 text-[#65605d]">
            <div className="leading-5 text-xs">© 2025 Trade Me Limited</div>
            <ul className="flex justify-between items-center gap-6">
              <li className="text-xs hover:underline cursor-pointer">Desktop site</li>
              <li className="text-xs hover:underline cursor-pointer">About Us</li>
              <li className="text-xs hover:underline cursor-pointer">Careers</li>
              <li className="text-xs hover:underline cursor-pointer">Advertise</li>
              <li className="text-xs hover:underline cursor-pointer">Privacy policy</li>
              <li className="text-xs hover:underline cursor-pointer">Terms & conditions</li>
              <li className="text-xs hover:underline cursor-pointer">Contact Us</li>
            </ul>
            <div className="flex justify-center items-center gap-4">
              <img src={shieldedLogo} className="h-6 w-6" />
              <div className="flex justify-center items-center">
                <img src={instagram} className="mr-2" />
                <img src={facebook} className="mr-2" />
                <img src={linkedin} className="mr-2" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
