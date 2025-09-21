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
import ping from "../../assets/icons/ping.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import addFav from "../../assets/icons/addFav.svg";
import share from "../../assets/icons/share.svg";

function Listing() {
  return (
    <>
      <main className="leading-6 text-[#65605d]">
        <div className="mr-auto ml-auto px-[140px] max-w-[1600px] flex items-center justify-between">
          <div className="bg-white w-full">
            <div className="h-[48px] flex items-center mb-[8px]">
              <p className="text-[12px] text-[#007acd]">Home / Marketplace / Clothing & Fashion</p>
            </div>
            <div className="flex gap-4">
              {/* LEFT COLUMN */}
              <div className="w-[66.6667%]">
                {/* ---------- IMAGES ---------- */}
                <div className="carousel h-[50vh] min-h-[400px] max-h-[478px] max-w-[812px]  ">
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
                <div className="flex w-full mt-[2px] pb-[8px] gap-1 mb-6">
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
                {/* BODY */}
                <div className="flex flex-col">
                  {/* DETAILS */}
                  <div className="flex mb-6">
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Details</h4>
                    <p className="w-[75%] mb-4">
                      <span className="font-medium">Condition: </span>Used
                    </p>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="flex mb-6">
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Description</h4>
                    <p className="w-[75%] mb-4">
                      Excellent condition Apple iPhone 14 Pro Max - 256gb
                      <br />
                      <br />
                      Fully functional, no scratches and in excellent condition Original Apple branded cable included Original box Apple sticker
                      <br />
                      <br />
                      https://support.apple.com/en-us/111846
                    </p>
                  </div>
                  {/* SHIPPING & pick-up options */}
                  <div className="flex  mb-6">
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Shipping & pick-up options</h4>
                    <div className="w-[75%]">
                      <table className="w-full mb-6">
                        <th className="table-header-group table-fixed h-10  border-b border-[#d7d5d2] ">
                          <tr className="table-row bg-[#f6f5f4] ">
                            <th className="table-cell w-full py-2 px-4 font-medium text-left">Destination & description</th>
                            <th className="table-cell w-full py-2 px-4 font-medium text-right">Price</th>
                          </tr>
                        </th>
                        <tbody className="table-row-group ">
                          <tr className="table-row">
                            <td className="table-cell h-10 w-full py-2 px-4 border-b border-gray-300 text-left">Free shipping within New Zealand</td>
                            <td className="table-cell h-10 w-full py-2 px-4 border-b border-gray-300 text-right">Free</td>
                          </tr>
                          <tr className="table-row">
                            <td className="table-cell h-10 w-full py-2 px-4 border-b border-gray-300 text-left">
                              Pick-up available from Auckland City, Auckland
                            </td>
                            <td className="table-cell h-10 w-full py-2 px-4 border-b border-gray-300 text-right">Free</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="block border-l-8 border-[#65605d] mb-6 bg-[#f6f5f4] rounded-md p-4 text-[#007acd] cursor-pointer">
                        Learn more about shipping & delivery options
                      </div>
                    </div>
                  </div>
                  {/* PAYMENT OPTIONS */}
                  <div className="flex mb-6">
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Payment Options</h4>
                    <div className="flex w-[75%] basis-auto mb-4">
                      <div className="w-[50%] basis-auto">
                        <img src={ping} className="mb-2" />
                        <p className="mb-2">Pay instantly by card, Ping balance or saved bank account.</p>
                        <p className="mb-6 text-[#007acd] cursor-pointer">What's Ping?</p>
                      </div>
                      <div className="w-[50%] basis-auto px-3">
                        <p className="mb-2 font-bold">Other options</p>
                        <p className="mb-6">Cash, NZ Bank Deposit</p>
                      </div>
                    </div>
                  </div>
                  {/* QUESTIONS & ANSWERS */}
                  <div className="flex mb-6">
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Questions & Answers</h4>
                    <div className="w-[75%] ">
                      <p className="mb-2">
                        You must <span className="text-[#007acd]">become authenticated</span> to ask questions.
                      </p>
                      <p className="mb-6">No questions have been asked</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT COLUMN - SIDEBAR*/}
              <div className="w-[33.3334%]">
                {/* <div className="bg-yellow-100 col-start-2 row-start-1 row-span-2 "> */}
                <h1 className="text-[#44413d] text-3xl leading-10 font-bold mb-4">Dr Martens, Doctor Martens US size 7</h1>
                <div className="mb-4 min-h-[42px] flex text-[#65605d] items-center">
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
                <div className="w-full mb-4 border border-[#d7d5d2] rounded-lg shadow-sm">
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
                      simonette <span>(100</span>
                      <img src={star} className="inline-block mt-[-2px]" />
                      <span>)</span>
                    </p>
                    <p>
                      <span className="text-lg font-medium text-[#44413d]">100%</span> positive feedback
                    </p>
                    <p className="leading-5 text-sm">Seller located in Auckland City, Auckland</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ABOUT THE SELLER */}
            <div className="flex flex-row flex-wrap basis-auto w-[66.6667%] mb-14">
              <h4 className="w-[25%] text-[#44413d] text-lg font-medium mb-4">About the seller</h4>
              <div className="w-[75%] basis-auto px-7 pt-12 pb-2 mt-8 mb-4 text-center">
                <div className="inline-block -mt-[33%] mb-3 w-15.5 h-15.5 pt-4 bg-[#ffe8ac] rounded-full text-[31px] text-[#eb9600]">S</div>
                <h3 className="text-[#44413d] font-medium text-lg mb-4">simonette</h3>
                <span className="block">
                  100% positive feedback(<span className="text-[#007acd]">100</span>
                  <img src={star} className="inline-block mt-[-2px]" />)
                </span>
                <div className="inline-block mb-6 bg-[#00aa76] h-4 px-[5px] mt-[2px] mr-[2px] rounded-sm text-white text-[11px] font-medium leading-[17px] uppercase">
                  ADDRESS VERIFIED
                </div>
                <div className="pb-2 mb-6 w-full ">
                  <div className="py-2 flex border-b border-[#d7d5d2]">
                    <div className="grow shrink basis mr-2 text-left">Location</div>
                    <div className="shrink basis-auto text-right">Auckland City</div>
                  </div>
                  <div className="py-2 flex border-b border-[#d7d5d2]">
                    <div className="grow shrink basis mr-2 text-left">Member since</div>
                    <div className="shrink basis-auto text-right">Saturday, 30 August 2025</div>
                  </div>
                  <div className="py-2 flex border-b border-[#d7d5d2] cursor-pointer">
                    <div className="grow shrink basis mr-2 text-[#007acd] text-left">View seller's other listings</div>
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
                <div className="basis-auto px-3 mb-6">
                  <button className="btn min-w-8 min-h-8 py-6 px-6 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer">
                    <img src={addFav} className="mr-2" />
                    Add to Favourite Sellers
                  </button>
                </div>
                <div className="text-[#007acd] cursor-pointer">Read our safe buying advice</div>
              </div>
            </div>
            {/* SHARE THIS LISTING */}
            <div className="mb-14">
              <div className="mb-4 text-center">
                <div className="inline-block text-[#007acd]">
                  <img src={share} className="inline-block mt-[-2px] mr-1" />
                  Share this listing
                </div>
                <span className="before:content-['\00a0\00a0\2022\00a0']">
                  Page Views: <span className="font-bold">261</span>
                </span>
                <span className="before:content-['\00a0\00a0\2022\00a0']">Listing #5514776237</span>
              </div>
              <div className="mb-4 text-[12px] leading-5 text-center">
                <img src={star} className="inline-block mr-0.5 " />
                Community Watch: <span className="text-[#007acd] cursor-pointer">Report this listing</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* TODO as another component : Seller's other things */}
      <div className="bg-[#f6f5f4] h-100">
        <div className="mr-auto ml-auto px-[140px] max-w-[1600px] h-full flex justify-between">
          <div className="flex w-full text-[#44413d] text-lg font-medium pt-6">Seller's Other things</div>
        </div>
      </div>
    </>
  );
}

export default Listing;
