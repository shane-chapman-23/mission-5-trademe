import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ListingCard from "../../sharedComponents/ListingCard";
import ComparisonBox from "../../sharedComponents/ComparisonBox";

//images
import searchIcon from "../../assets/icons/magnifyingGlass.svg";
import saveIcon from "../../assets/icons/save-icon.svg";

export default function Marketplace() {
  const [listings, setListings] = useState([]);
  const [comparisonList, setComparisonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // pull query param from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("search") || "";
    setSearchQuery(q);

    const fetchListings = async () => {
      try {
        const url = q
          ? `http://localhost:5000/listings/search?q=${encodeURIComponent(q)}`
          : "http://localhost:5000/listings";

        const res = await fetch(url);
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error("Error fetching listings:", err);
      }
    };

    fetchListings();
  }, [location.search]); // run every time URL changes

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      searchQuery.trim()
        ? `/marketplace?search=${encodeURIComponent(searchQuery)}`
        : "/marketplace"
    );
  };

  const handleAddToComparison = (listing) => {
    setComparisonList((prev) => {
      if (prev.length >= 4) return prev;
      if (prev.find((item) => item._id === listing._id)) return prev;
      return [...prev, listing];
    });
  };

  const handleRemoveFromComparison = (id) => {
    setComparisonList((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col  mx-auto max-w-[1440px] items-center bg-white h-[420px] p-[10px]">
        <div className="flex flex-col w-[83%] justify-center mt-10 mb-2">
          {/* Path */}
          <p className="text-[12px] text-[#007acd]">Home / Marketplace</p>
          {/* Title */}
          <h1 className="text-[#4a56CC] text-[36px] font-bold">MARKETPLACE</h1>
        </div>
        {/* Search Bar Container */}
        <div className="flex justify-center w-full px-1 my-5">
          <div className="flex justify-between relative w-[83%]">
            {/* Search Icon */}
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5"
            />
            {/* Search Bar */}
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={searchQuery}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[811px] h-[61px] border border-gray-300 rounded-sm pl-8 placeholder:text-[15px] placeholder:text-black text-black"
              ></input>
            </form>
            <button className="flex justify-center items-center pr-4 gap-2 w-[230px] h-[61px] bg-[#F0EFEE] text-[15px] text-black font-bold">
              <img
                src={saveIcon}
                alt="save icon"
                className="w-[20px] h-[20px]"
              />
              save this search
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="flex w-[83%] gap-5 my-5 px-1">
          <button className="w-[108px] h-[35px] bg-[#007ACD] rounded-2xl text-white px-2 text-[10px] items-center justify-center font-semibold">
            Refine
          </button>
          <button className="h-[35px] w-[173px] bg-[#007ACD] rounded-2xl text-white px-2 text-[10px] items-center justify-center font-semibold">
            Category: All
          </button>
          <button className="min-w-[108px] h-[35px] border border-blue-500 rounded-2xl px-2 text-[10px] items-center justify-center text-blue-500 font-semibold">
            All Locations
          </button>
          <button className="min-w-[108px] h-[35px] border border-blue-500 rounded-2xl px-2 text-[10px] items-center justify-center text-blue-500 font-semibold">
            New and Used
          </button>
          <button className="min-w-[108px] h-[35px] border border-blue-500 rounded-2xl px-2 text-[10px] items-center justify-center text-blue-500 font-semibold">
            Shipping: All
          </button>
          <button className="min-w-[108px] h-[35px] border border-blue-500 rounded-2xl px-2 text-[10px] items-center justify-center text-blue-500 font-semibold">
            Price: Any
          </button>
        </div>
      </div>

      {/* listing display */}
      <div className="flex justify-center mx-auto items-center bg-white max-w-[1600px] p-[10px]">
        <div>
          <div className="grid grid-cols-3 gap-16 mx-auto">
            {listings.map((listing) => (
              <ListingCard
                key={listing._id}
                listing={listing}
                onAddToComparison={() => handleAddToComparison(listing)}
              />
            ))}
          </div>
        </div>
      </div>
      <ComparisonBox
        comparisonList={comparisonList}
        handleRemoveFromComparison={handleRemoveFromComparison}
      />
    </>
  );
}
