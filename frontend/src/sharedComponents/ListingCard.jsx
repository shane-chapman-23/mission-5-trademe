import boots1 from "../assets/images/boots1.jpg";
import { useNavigate } from "react-router-dom";

export default function ListingCard({ listing, onAddToComparison }) {
  const navigate = useNavigate();

  const openListing = () => {
    navigate(`/listing/${listing._id}`, { state: { listing } });
  };

  return (
    <div className="flex flex-col h-[408px] w-[312px] rounded-md shadow relative ">
      {/* Wishlist button */}
      <button className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-yellow-400 rotate-270 rounded-b"></button>
      {/* Add to comparison list button */}
      <div className="absolute top-2 left-2">
        <div className="relative flex items-center">
          {/* The round button (hover target) */}
          <button
            onClick={onAddToComparison}
            className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg relative z-10 group"
          >
            +{/* "Add to comparison" popup */}
            <span
              className="absolute left-full ml-2 bg-white text-gray-700 text-sm px-3 py-2 rounded shadow-lg 
                   opacity-0 translate-x-[-10px] pointer-events-none
                   group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-200 h-10 flex items-center whitespace-nowrap"
            >
              Add to comparison list
            </span>
          </button>
        </div>
      </div>
      {/* Image */}
      <div onClick={openListing} className="bg-gray-200 h-[70%] flex justify-center rounded-t cursor-pointer">
        <img src={boots1} className="h-[100%]"></img>
      </div>
      {/* Details */}
      <div onClick={openListing} className="h-[30%] bg-white cursor-pointer">
        <div className="m-2 h-[100%]">
          <div className="flex justify-between">
            <p className="text-gray-500 text-[12px]">Auckland</p>
            <p className="text-gray-500 text-[12px]">closes: Thu, 25 sep</p>
          </div>
          <div className="flex h-[75%] justify-between">
            <div>
              <h2 className="text-gray-500 text-[14px] font-bold">{listing.title}</h2>
              <p className="text-gray-500 text-[12px]">$10.00 shipping nationwide</p>
              <p className="text-gray-500 text-[12px]">Expected delivery in 2-3 business days</p>
            </div>
            <div className="h-100% flex flex-col justify-end">
              <p className="text-gray-500 text-[12px]">Buy Now</p>
              <p className="text-gray-500 text-[14px] font-bold">{`$${Number(listing.start_price).toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
