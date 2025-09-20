import React from "react";
import boots1 from "../../assets/images/boots1.jpg";
import boots2 from "../../assets/images/boots2.jpg";
import boots3 from "../../assets/images/boots3.jpg";
import boots4 from "../../assets/images/boots4.jpg";
import boots1s from "../../assets/images/boots1s.jpg";
import boots2s from "../../assets/images/boots2s.jpg";
import boots3s from "../../assets/images/boots3s.jpg";
import boots4s from "../../assets/images/boots4s.jpg";
import left from "../../assets/icons/left-white.svg";
import right from "../../assets/icons/right-white.svg";
import clock from "../../assets/icons/clock.svg";
import magnet from "../../assets/icons/magnet.svg";
import truck from "../../assets/icons/truck.svg";
import location from "../../assets/icons/location.svg";
import shield from "../../assets/icons/shield.svg";
import star from "../../assets/icons/star.svg";

function Listing() {
  return (
    <>
      <main className="bg-green-300 leading-6 text-[#65605d]">
        <div className="bg-red-300 mr-auto ml-auto px-[140px] max-w-[1600px]  flex items-center justify-between">
          <div className="bg-white w-full ">
            <div className="h-[48px] flex items-center mb-[8px]">
              <p className="text-[12px] text-[#007acd]">Home / Marketplace / Clothing & Fashion</p>
            </div>
            <div className="grid gap-4 grid-cols-[2fr_1fr] grid-rows-[auto_auto_auto]">
              {/* LEFT COLUMN */}
              <div className="bg-purple-400 col-start-1 row-start-1">
                {/* ---------- IMAGES ---------- */}
                <div className="carousel bg-green-100 h-[50vh] min-h-[400px] max-h-[478px] max-w-[812px]  ">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img src={boots1} className="w-full object-cover rounded-2xl" />
                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-r-[3px]">
                        <a href="#slide4">
                          <img src={left} alt="" className="" />
                        </a>
                      </div>
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-l-[3px]">
                        <a href="#slide2">
                          <img src={right} className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src={boots2} className="w-full object-cover rounded-2xl" />
                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-r-[3px]">
                        <a href="#slide1">
                          <img src={left} alt="" className="" />
                        </a>
                      </div>
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-l-[3px]">
                        <a href="#slide3">
                          <img src={right} className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src={boots3} className="w-full object-cover rounded-2xl" />
                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-r-[3px]">
                        <a href="#slide2">
                          <img src={left} alt="" className="" />
                        </a>
                      </div>
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-l-[3px]">
                        <a href="#slide4">
                          <img src={right} className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img src={boots4} className="w-full object-cover rounded-2xl" />
                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-r-[3px]">
                        <a href="#slide3">
                          <img src={left} alt="" className="" />
                        </a>
                      </div>
                      <div className="bg-black/60 text-[#fff] text-[16px] text-center min-w-[32px] min-h-[32px] px-[8px] py-[12px] rounded-l-[3px]">
                        <a href="#slide1">
                          <img src={right} className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* IMAGE SELECT */}
                <div className="bg-green-300 flex w-full mt-[2px] pb-[8px] gap-1">
                  <a href="#slide1">
                    <img src={boots1s} className="w-[64px] h-[48px] object-cover" />
                  </a>
                  <a href="#slide2">
                    <img src={boots2s} className="w-[64px] h-[48px] object-cover" />
                  </a>
                  <a href="#slide3">
                    <img src={boots3s} className="w-[64px] h-[48px] object-cover" />
                  </a>
                  <a href="#slide4">
                    <img src={boots4s} className="w-[64px] h-[48px] object-cover" />
                  </a>
                </div>
              </div>
              {/* RIGHT COLUMN - SIDEBAR*/}
              <div className="bg-yellow-100 col-start-2 row-start-1 row-span-2 ">
                <h1 className="text-[#44413d] text-3xl leading-10 font-bold mb-4">Dr Martens, Doctor Martens US size 7</h1>
                <div className="bg-sky-200 mb-4 min-h-[42px] flex text-[#65605d] items-center">
                  <img src={clock} className="mr-2 inline-flex" />
                  <div className="grow shrink basis-auto">
                    <p className="inline-block">Closes: Fri 26th Sep, 9:07pm</p>
                    <p className="text-xs leading-4 text-[#76716d]">6 days, 8 hours, 53 minutes</p>
                  </div>
                </div>
                <button className="btn min-w-8 min-h-8 py-6 px-6 mb-4 rounded-b-sm bg-[#f9af2c] w-full text-[#943900] text-[16px] border-0 font-medium cursor-pointer">
                  <img src={magnet} /> Add to Watchlist
                </button>
                <p className="text-sm text-center mb-4 mt-[-8px]">
                  <strong>36</strong> others watchlisted
                </p>
                {/* PRICES - STARTING / BID / ETC */}
                <div className="bg-blue-100 w-full mb-4 border border-[#d7d5d2] rounded-lg shadow-sm">
                  {/* BUY NOW */}
                  <div className="p-4">
                    <p className="text-center">Buy Now</p>
                    <h1 className="text-[32px] text-[#44413d] text-center leading-10 mb-6">
                      <strong>$1,100</strong>
                    </h1>
                    <button className="btn min-w-8 min-h-8 py-6 px-6 mb-2 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                  {/* STARTING PRICE */}
                  <div className="p-4">
                    <p className="text-center">Starting Price</p>
                    <h1 className="text-[32px] text-[#44413d] text-center leading-10 mb-6">
                      <strong>$900</strong>
                    </h1>
                    <button className="btn min-w-8 min-h-8 py-6 px-6 mb-6 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer">
                      Place Bid
                    </button>
                    <p className="text-center">Reserve not met</p>
                    <div className="px-3 py-1.5 text-center text-[#007acd] cursor-pointer">6 bids so far - view history</div>
                  </div>
                  {/* MAKE AN OFFER */}
                  <div className="border-t border-t-[#d7d5d2] p-4 ">
                    <div className="grid grid-cols-2 py-4 gap-2 items-center">
                      <p className="text-xs leading-4 ">The seller is open to offers on this listing</p>
                      <button className="btn bg-[#c4c0bc40] border-0 text-[16px] text-[#007acd] font-medium text-center whitespace-nowrap min-w-8 min-h-8 p-6 w-auto rounded-sm cursor-pointer">
                        Make an offer
                      </button>
                    </div>
                  </div>
                  {/* SHIPPING BOX */}
                  <div className="bg-[#faf9f8] px-4 py-6 border-t border-t-[#d7d5d2] ">
                    <div className="mb-2 flex gap-4">
                      <img src={truck} />
                      <p className="text-sm ">
                        Shipping <span className="text-[#944275]">free within NZ</span>
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <img src={location} />
                      <p className="text-sm">Pick up available, Queenstown, Otago</p>
                    </div>
                  </div>
                </div>
                {/* BUYER PROTECTION */}
                <div className="mb-4 border p-4 border-[#8dcefc] bg-[#f3faff] shadow rounded-lg">
                  <img src={shield} className="leading-[1] inline-block" />
                  <span className="text-[#00569e] font-bold ml-1">Buyer Protection </span>
                  <span>
                    covers you up to $2,500 on this item when you pay with Ping or Afterpay if your item doesn't show up or isn't as described.
                  </span>
                  <p className="text-sm text-[#007acd]">Learn more about Buyer Protection</p>
                </div>
                {/* SELLER */}
                <div className="flex mb-6 px-2 py-4 border border-[#d7d5d2] rounded-lg shadow-sm">
                  <div className="w-15.5 h-15.5 bg-[#ffe8ac] rounded-full text-[31px] text-[#eb9600] flex items-center justify-center">S</div>
                  <div className="ml-4 flex flex-col justify-around ">
                    <p className="text-[#007acd]">
                      simonette <span>(1</span>
                      <img src={star} className="inline-block" />
                      <span>)</span>
                    </p>
                    <p>
                      <span className="text-lg font-medium text-[#44413d]">100%</span> positive feedback
                    </p>
                    <p className="leading-5 text-sm">Seller located in Auckland City, Auckland</p>
                  </div>
                </div>
              </div>
              {/* LEFT COLUMN - BODY */}
              <div className="col-start-1 row-start-2">
                {/* DETAILS SECTION*/}
                <div className="mb-6 flex">
                  <h4>Details</h4>
                </div>
              </div>
              {/* LEFT COLUMN - BODY-SELLER */}
              <div className="col-start-1 row-start-3"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Listing;
