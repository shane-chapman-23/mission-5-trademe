import {useNavigate} from "react-router-dom";

// assets
import wishlistIcon from "../assets/icons/magnet.svg";

// ----------------- Subcomponents -----------------

const WishlistRibbon = () => (
  <>
    <button className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-yellow-400 rotate-270 rounded-b" />
    <img
      src={wishlistIcon}
      alt="wishlist icon"
      className="absolute top-[8px] right-[8px] w-5 h-5"
    />
  </>
);

const ComparisonButton = ({onAddToComparison}) => (
  <div className="absolute top-3 left-3">
    <div className="relative flex items-center group">
      {/* Expanding background */}
      <span
        className="absolute left-0 bg-white text-gray-700 text-sm overflow-hidden 
                 flex items-center justify-center px-0 w-[35px] h-[33px] 
                 rounded-full shadow-lg z-0 transition-all duration-300
                 group-hover:w-[200px] group-hover:rounded-full group-hover:px-6"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-[12px] text-black font-bold w-full pl-7">
          add to comparison
        </span>
      </span>

      {/* Round button */}
      <button
        onClick={onAddToComparison}
        className="bg-[#3479C7] text-white text-[50px] w-[35px] h-[35px] rounded-full flex items-center justify-center shadow-lg relative z-10 cursor-pointer"
      >
        <span className="relative -top-1.5 font-sans">+</span>
      </button>
    </div>
  </div>
);

const ListingImage = ({image, onClick}) => (
  <div
    onClick={onClick}
    className="bg-gray-200 h-[70%] flex justify-center rounded-t-lg cursor-pointer"
  >
    <img src={image} alt="listing" className="object-cover max-w-[250px]" />
  </div>
);

const ListingDetails = ({listing, onClick}) => (
  <div
    onClick={onClick}
    className="h-[30%] bg-white cursor-pointer rounded-b-md"
  >
    <div className="m-2 h-full">
      {/* Location + Closes */}
      <div className="flex justify-between">
        <p className="text-[#646464] text-[8px]">{listing.location}</p>
        <p className="text-[#646464] text-[8px]">closes: Thu, 25 sep</p>
      </div>

      {/* Title + Shipping */}
      <div className="my-3">
        <h2 className="text-black text-[12px] font-bold">{listing.title}</h2>
        <p className="text-gray-500 text-[8px]">
          ${listing.shipping_cost}.00 shipping nationwide
        </p>
        <p className="text-gray-500 text-[8px]">
          Expected delivery in 2-3 business days
        </p>
      </div>

      {/* Prices */}
      <div className="flex justify-between">
        {/* Current bid */}
        <div className="flex flex-col justify-end">
          <p className="text-gray-500 text-[8px]">No reserve</p>
          <p className="text-black text-[10px] font-bold">
            {listing.start_price
              ? `$${Number(listing.start_price).toFixed(2)}`
              : "$10.00"}
          </p>
        </div>

        {/* Buy now (optional) */}
        {listing.buy_now && (
          <div className="flex flex-col justify-end text-right">
            <p className="text-gray-500 text-[8px]">Buy Now</p>
            <p className="text-black text-[10px] font-bold">
              ${Number(listing.buy_now).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ----------------- Main Component -----------------

export default function ListingCard({listing, onAddToComparison}) {
  const navigate = useNavigate();

  const openListing = () => {
    navigate(`/listing/${listing._id}`);
  };

  return (
    <div className="flex flex-col h-[408px] w-[350px] rounded-lg shadow-lg relative">
      <WishlistRibbon />
      <ComparisonButton onAddToComparison={onAddToComparison} />
      <ListingImage image={listing.image1} onClick={openListing} />
      <ListingDetails listing={listing} onClick={openListing} />
    </div>
  );
}
