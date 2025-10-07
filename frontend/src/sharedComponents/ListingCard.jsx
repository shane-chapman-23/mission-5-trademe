import { useNavigate } from "react-router-dom";
import wishlistIcon from "../assets/icons/magnet.svg";

export default function ListingCard({ listing, onAddToComparison }) {
  const navigate = useNavigate();

  const openListing = () => {
    navigate(`/listing/${listing._id}`);
  };

  return (
    <div className="flex flex-col h-[408px] w-[350px] rounded-lg shadow-lg relative ">
      {/* Wishlist button */}
      <button className="absolute top-0 right-0 w-[0] h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-yellow-400 rotate-270 rounded-b"></button>
      <img src={wishlistIcon} alt="wishlist icon" className="absolute top-[8px] right-[8px] w-5 h-5" />
      {/* Add to comparison list button */}
      <div className="absolute top-3 left-3">
        <div className="relative flex items-center group">
          {/* Expanding background */}
          <span
            className="absolute left-0 bg-white text-gray-700 text-sm overflow-hidden 
                 flex items-center justify-center px-0 w-[35px] h-[33px] 
                 rounded-full shadow-lg z-0 transition-all duration-300
                 group-hover:w-[200px] group-hover:rounded-full group-hover:px-6"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-center text-[12px] text-black font-bold w-full  pl-7">
              add to comparison
            </span>
          </span>

          {/* The round button (hover target) */}
          <button
            onClick={onAddToComparison}
            className="bg-[#3479C7] text-white text-[50px] w-[35px] h-[35px] rounded-full flex items-center justify-center shadow-lg relative z-10 cursor-pointer font-sans"
          >
            <span className="relative -top-1.5">+</span>
          </button>
        </div>
      </div>
      {/* Image */}

      <div onClick={openListing} className="bg-gray-200 h-[70%] flex justify-center rounded-t-lg cursor-pointer">
        <img src={listing.image1} className="w-full object-cover rounded-t-lg"></img>
      </div>
      {/* Details */}
      <div onClick={openListing} className="h-[30%] bg-white cursor-pointer rounded-b-md">
        <div className="m-2 h-[100%]">
          <div className="flex justify-between">
            <p className="text-[#646464] text-[8px]">{listing.location}</p>
            <p className="text-[#646464] text-[8px]">closes: Thu, 25 sep</p>
          </div>
          <div className="flex justify-between my-3">
            <div>
              <h2 className="text-black text-[12px] font-bold">{listing.title}</h2>
              <p className="text-gray-500 text-[8px]">${listing.shipping_cost}.00 shipping nationwide</p>
              <p className="text-gray-500 text-[8px]">Expected delivery in 2-3 business days</p>
            </div>
          </div>
          {/* Current bid */}
          <div className="flex justify-between">
            <div className="h-100% flex flex-col justify-end">
              <p className="text-gray-500 text-[8px]">No reserve</p>
              <p className="text-black text-[10px]  font-bold">{`$${Number(listing.start_price).toFixed(2)}` || "$10.00"}</p>
            </div>
            {/* buy now price */}
            {listing.buy_now && (
              <div className="h-100% flex flex-col justify-end text-right">
                <p className="text-gray-500 text-[8px]">Buy Now</p>
                <p className="text-black text-[10px] font-bold">{`$${Number(listing.buy_now).toFixed(2)}`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
