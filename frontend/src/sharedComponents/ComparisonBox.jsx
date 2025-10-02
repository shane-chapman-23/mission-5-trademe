import {useState} from "react";

// assets
import expandButton from "../assets/icons/expand-button.svg";
import collapseButton from "../assets/icons/collapse-button.svg";
import upArrow from "../assets/icons/up-arrow-white.svg";
import downArrow from "../assets/icons/down-arrow-white.svg";

// ----------------- Subcomponents -----------------

const Header = ({isOpen, setIsOpen, setIsExpanded, hasItems}) => (
  <div
    className={`flex justify-between ${
      isOpen && hasItems ? "rounded-t-lg" : "rounded-lg"
    } items-center bg-[#4678C1] h-[58px] px-3`}
  >
    <h3 className="font-bold text-white text-[14px] pl-7">Comparison List</h3>
    <span
      className="text-white font-bold cursor-pointer"
      onClick={() => {
        setIsOpen(!isOpen);
        if (isOpen) setIsExpanded(false); // reset expanded if closing
      }}
    >
      {isOpen ? (
        <img src={upArrow} alt="up" />
      ) : (
        <img src={downArrow} alt="down" />
      )}
    </span>
  </div>
);

const ToggleExpandButton = ({isExpanded, setIsExpanded}) => (
  <button
    onClick={() => setIsExpanded(!isExpanded)}
    className="absolute top-2 left-2 z-10 cursor-pointer"
  >
    <img
      src={isExpanded ? collapseButton : expandButton}
      alt={isExpanded ? "Collapse View" : "Expand View"}
      className="w-4 h-4"
    />
  </button>
);

const CompactRow = ({item, handleRemove}) => (
  <div className="flex items-center justify-between text-[15px] text-[#505050] font-bold border-b border-[#DDDDDD] pb-1">
    <div className="flex items-center h-[58px]">
      <img
        src={item.image1}
        alt={item.title}
        className="h-[43px] w-[35px] object-cover rounded pl-3"
      />
      <span className="pl-3 w-[250px]">{item.title}</span>
    </div>
    <button
      onClick={() => handleRemove(item._id)}
      className="text-[#8C8C8C] font-bold pr-4 text-[22px] cursor-pointer"
    >
      ✕
    </button>
  </div>
);

const ExpandedCard = ({item, handleRemove}) => (
  <div className="p-2 relative bg-gray-200 h-[340px] w-[302px] rounded-lg shadow-lg text-black leading-tight">
    {/* Remove */}
    <button
      onClick={() => handleRemove(item._id)}
      className="absolute top-1 right-2 text-[#8C8C8C] font-bold cursor-pointer"
    >
      ✕
    </button>

    {/* Image + Basic Info */}
    <div className="flex">
      <img
        src={item.image1}
        alt={item.title}
        className="h-[100px] w-[69px] object-cover rounded"
      />
      <div className="ml-2">
        <h4 className="font-bold text-[14px] w-[200px] mb-2">{item.title}</h4>
        <p className="text-[10px]">
          <span className="font-bold">Current highest bid:</span> $
          {item.start_price}
        </p>
        <p className="text-[10px]">
          <span className="font-bold">Buy now:</span> ${item.buy_now || "50"}
        </p>
        <p className="text-[10px]">
          <span className="font-bold">Shipping:</span> Pick up only
        </p>
        <p className="text-[10px] text-red-500">closes in 10 hours</p>
      </div>
    </div>

    {/* Description + Details */}
    <div className="flex justify-between mt-5 mr-5 text-[10px]">
      <div>
        <p className="font-bold text-[12px]">Description:</p>
        <p className="w-[150px]">
          {item.description.length > 50
            ? item.description.slice(0, 75) + "..."
            : item.description}
        </p>
      </div>
      <div>
        <p className="text-[12px] font-bold">Product Details</p>
        <p>
          <span className="font-bold">Colour:</span> blue
        </p>
        <p>
          <span className="font-bold">Material:</span> cotton
        </p>
        <p>
          <span className="font-bold">Condition:</span> used
        </p>
      </div>
    </div>

    {/* Payment */}
    <div className="text-[10px] mt-5">
      <p className="text-[12px] font-bold">Payment Options</p>
      <p>
        <span className="font-bold">Bank transfer:</span> available
      </p>
      <p>
        <span className="font-bold">Pay pal:</span> available
      </p>
    </div>

    {/* Seller + Watchlist */}
    <div className="flex mt-14 justify-between">
      <div className="flex items-center">
        <div className="w-[34px] h-[34px] bg-[#ffe8ac] rounded-full text-[20px] text-[#eb9600] flex items-center justify-center">
          S
        </div>
        <div className="ml-2">
          <p className="font-semibold text-[12px]">Simonette</p>
          <p className="text-[8px]">100% positive feedback</p>
        </div>
      </div>
      <button className="bg-[#FFC041] w-[128px] mt-2 px-2 py-1 text-xs font-bold rounded-full cursor-pointer">
        Add to Watchlist
      </button>
    </div>
  </div>
);

// ----------------- Main Component -----------------

export default function ComparisonBox({
  comparisonList,
  handleRemoveFromComparison,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasItems = comparisonList.length > 0;

  return (
    <div
      className={`fixed bottom-4 right-4 rounded-lg bg-white shadow-lg z-50 ${
        isExpanded ? "w-[700px] h-[420px]" : "w-[372px] h-auto"
      }`}
    >
      {/* Expand/Collapse button */}
      {isOpen && hasItems && (
        <ToggleExpandButton
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      )}

      {/* Header */}
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        hasItems={hasItems}
      />

      {/* Content */}
      {isOpen && hasItems && (
        <div className={isExpanded ? "h-[350px] overflow-y-auto" : "h-auto"}>
          {isExpanded ? (
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 p-2">
                {comparisonList.map((item) => (
                  <ExpandedCard
                    key={item._id}
                    item={item}
                    handleRemove={handleRemoveFromComparison}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              {comparisonList.map((item) => (
                <CompactRow
                  key={item._id}
                  item={item}
                  handleRemove={handleRemoveFromComparison}
                />
              ))}
            </div>
          )}

          {/* Max items message */}
          {comparisonList.length === 4 && (
            <div className="text-[#707070] font-bold text-[8px] text-center my-1">
              Reached maximum comparisons
            </div>
          )}
        </div>
      )}
    </div>
  );
}
