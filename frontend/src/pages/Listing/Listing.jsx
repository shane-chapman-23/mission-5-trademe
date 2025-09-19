import React from "react";

function Listing() {
  return (
    <>
      <main className="bg-green-300">
        <div className="bg-red-300 mr-auto ml-auto px-[140px] max-w-[1600px]  flex items-center justify-between">
          <div className="bg-white w-full h-screen">
            <div className="h-[48px] flex items-center mb-[8px]">
              <p className="text-[12px] text-[#007acd]">Home / Marketplace / Clothing & Fashion</p>
            </div>
            <div className="flex">
              <div className="w-[66.6667%] h-100 bg-blue-300 px-[12px]"></div>
              <div className="w-[33.3333%] h-100 bg-yellow-200"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Listing;
