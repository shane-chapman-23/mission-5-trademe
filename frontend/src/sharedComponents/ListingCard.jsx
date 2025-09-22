import React from "react";
import boots1 from "../assets/images/boots1.jpg";
import boots2 from "../assets/images/boots2.jpg";
import boots3 from "../assets/images/boots3.jpg";
import boots4 from "../assets/images/boots4.jpg";

export default function ListingCard() {
  return (
    <div className="flex flex-col h-[408px] w-[312px] rounded-md shadow relative">
      {/* Wishlist button */}
      <button className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-yellow-400 rotate-270 rounded-b">
        +
      </button>
      {/* Add to comparison list button */}
      <button className="absolute top-2 left-2 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"></button>
      {/* Image */}
      <div className="bg-gray-200 h-[70%] flex justify-center rounded-t">
        <img src={boots1} className="h-[100%]"></img>
      </div>
      {/* Details */}
      <div className="h-[30%]">
        <div className="m-2 h-[100%]">
          <div className="flex justify-between">
            <p className="text-gray-500 text-[12px]">Auckland</p>
            <p className="text-gray-500 text-[12px]">closes: Thu, 25 sep</p>
          </div>
          <div className="flex h-[75%] justify-between">
            <div>
              <h2 className="text-gray-500 text-[14px] font-bold">
                Green Lamp
              </h2>
              <p className="text-gray-500 text-[12px]">
                $10.00 shipping nationwide
              </p>
              <p className="text-gray-500 text-[12px]">
                Expected delivery in 2-3 business days
              </p>
            </div>
            <div className="h-100% flex flex-col justify-end">
              <p className="text-gray-500 text-[12px]">Buy Now</p>
              <p className="text-gray-500 text-[14px] font-bold">$28.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
