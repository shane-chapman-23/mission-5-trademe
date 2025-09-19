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

function Listing() {
  return (
    <>
      <main className="bg-green-300">
        <div className="bg-red-300 mr-auto ml-auto px-[140px] max-w-[1600px]  flex items-center justify-between">
          <div className="bg-white w-full ">
            <div className="h-[48px] flex items-center mb-[8px]">
              <p className="text-[12px] text-[#007acd]">Home / Marketplace / Clothing & Fashion</p>
            </div>
            <div className="flex">
              {/* LEFT COLUMN */}
              <div className="w-[66.6667%] bg-blue-300 px-[12px]">
                <div className="mr-auto ml-auto ">
                  {/* IMAGE */}
                  <div className="carousel bg-green-100 h-[50vh] min-h-[400px] max-h-[478px]  ">
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
              </div>
              {/* RIGHT COLUMN */}
              <div className="w-[33.3333%] h-100 bg-yellow-200"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Listing;
