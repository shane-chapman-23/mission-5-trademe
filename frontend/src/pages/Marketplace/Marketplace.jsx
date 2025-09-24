import {useState, useEffect} from "react";
import ListingCard from "../../sharedComponents/ListingCard";

import searchIcon from "../../assets/icons/magnifyingGlass.svg";
import boots1 from "../../assets/images/boots1.jpg";
import ComparisonBox from "../../sharedComponents/ComparisonBox";

export default function Marketplace() {
  const [listings, setListings] = useState([]);
  const [comparisonList, setComparisonList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, []);

  const handleAddToComparison = (listing) => {
    setComparisonList((prev) => {
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

      <div className="flex justify-center bg-white h-[300px] pt-[10px]">
        <div className="w-[68%]">
          <p className="text-[12px] text-[#007acd]">
            Home / Marketplace / Computers
          </p>
          <h1 className="text-[#4854D3] text-[36px] font-bold">COMPUTERS</h1>
          <p className="text-gray-500 text-sm mb-[10px] w-[60%]">
            Looking to upgrade your software, buy a computer, or simply after
            some cables? Find all your computer needs right here with our huge
            collection of new and second hand computer products and accessories.
            Look through the listings below or check out our categories to find
            your perfect solution.
          </p>
          <div className="relative">
            {/* Search Icon */}
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4"
            />
            {/* Search Bar */}
            <form>
              <input
                type="text"
                placeholder="Search within Computers"
                className="w-full border border-gray-300 rounded pl-10 py-1 placeholder-gray-400 placeholder:text-[14px] text-gray-500"
              ></input>
            </form>
            {/* Filters */}
          </div>
        </div>
      </div>
      {/* listing display */}
      <div className="flex justify-center bg-gray-100 w-[100%] p-5">
        <div className="grid md:grid-cols-4 gap-[20px]">
          {listings.map((listing) => (
            <ListingCard
              key={listing._id}
              listing={listing}
              onAddToComparison={() => handleAddToComparison(listing)}
            />
          ))}
        </div>
      </div>
      <ComparisonBox
        comparisonList={comparisonList}
        handleRemoveFromComparison={handleRemoveFromComparison}
      />
    </>
  );
}
