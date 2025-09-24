import {useState} from "react";

export default function ComparisonBox({
  comparisonList,
  handleRemoveFromComparison,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-md w-[400px]">
      {/* Header */}
      <div
        className="flex justify-between items-center bg-blue-500 h-12 px-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-white">Comparison List</h3>
        <span className="text-white font-bold">{isOpen ? "^" : "v"}</span>
      </div>

      {/* Content (collapsible) */}
      {isOpen && (
        <div className="p-2">
          {comparisonList.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between text-sm text-gray-600 mb-2 border-b pb-1"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.image || "/placeholder.jpg"}
                  alt={item.title}
                  className="w-8 h-8 object-cover rounded"
                />
                <span className="truncate max-w-[200px]">{item.title}</span>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromComparison(item._id)}
                className="text-gray-400 hover:text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
