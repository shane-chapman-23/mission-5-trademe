import {useState} from "react";
import boots1 from "../assets/images/boots1.jpg";

export default function ComparisonBox({
  comparisonList,
  handleRemoveFromComparison,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg  w-[372px] overflow-hidden ">
      {/* Header */}
      <div
        className="flex justify-between items-center bg-[#4678C1] h-[58px] px-3 cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-white text-[14px] pl-7">
          Comparison List
        </h3>
        <span className="text-white font-bold">{isOpen ? "^" : "v"}</span>
      </div>

      {/* Content (collapsible) */}
      {isOpen && comparisonList.length > 0 && (
        <div>
          {comparisonList.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between text-[15px] text-[#505050] font-bold border-b border-[#DDDDDD] pb-1"
            >
              <div className="flex items-center h-[58px] ">
                <img
                  src={item.image || boots1}
                  alt={item.title}
                  className="h-[43px] object-cover rounded pl-3"
                />
                <span className="pl-3">{item.title}</span>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromComparison(item._id)}
                className="text-[#8C8C8C] font-bold pr-4 text-[22px]"
              >
                ✕
              </button>
            </div>
          ))}
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
