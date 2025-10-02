import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ListingCard from "../../sharedComponents/ListingCard";
import ComparisonBox from "../../sharedComponents/ComparisonBox";

// assets
import searchIcon from "../../assets/icons/magnifyingGlass.svg";
import saveIcon from "../../assets/icons/save-icon.svg";

// ----------------- Reusable Components -----------------

const FilterButton = ({label, primary}) => {
  const baseStyles =
    "min-w-[108px] h-[35px] rounded-2xl px-2 text-[10px] font-semibold flex items-center justify-center";
  const styles = primary
    ? "bg-[#007ACD] text-white"
    : "border border-blue-500 text-blue-500";

  return <button className={`${baseStyles} ${styles}`}>{label}</button>;
};

// ----------------- Main Component -----------------

export default function Marketplace() {
  const [listings, setListings] = useState([]);
  const [comparisonList, setComparisonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Fetch listings whenever search query in URL changes
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
  }, [location.search]);

  // ----------------- Handlers -----------------

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
      if (prev.some((item) => item._id === listing._id)) return prev;
      return [...prev, listing];
    });
  };

  const handleRemoveFromComparison = (id) => {
    setComparisonList((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col mx-auto max-w-[1440px] items-center bg-white h-[420px] p-[10px]">
        <div className="flex flex-col w-[83%] mt-10 mb-2">
          <p className="text-[12px] text-[#007acd]">Home / Marketplace</p>
          <h1 className="text-[#4a56CC] text-[36px] font-bold">MARKETPLACE</h1>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center w-full px-1 my-5">
          <div className="flex justify-between relative w-[83%]">
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5"
            />
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search all of Trade Me"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[811px] h-[61px] border border-gray-300 rounded-sm pl-8 placeholder:text-[15px] text-black"
              />
            </form>
            <button className="flex justify-center items-center gap-2 w-[230px] h-[61px] bg-[#F0EFEE] text-[15px] text-black font-bold pr-4">
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
          <FilterButton label="Refine" primary />
          <FilterButton label="Category: All" primary />
          <FilterButton label="All Locations" />
          <FilterButton label="New and Used" />
          <FilterButton label="Shipping: All" />
          <FilterButton label="Price: Any" />
        </div>
      </div>

      {/* Listings */}
      <div className="flex justify-center mx-auto items-center bg-white max-w-[1600px] p-[10px]">
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

      {/* Comparison Box */}
      <ComparisonBox
        comparisonList={comparisonList}
        handleRemoveFromComparison={handleRemoveFromComparison}
      />
    </>
  );
}
