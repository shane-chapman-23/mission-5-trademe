import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ListingTutorial from "./components/ListingTutorial";
import BidModal from "./components/BidModal";
import ImageCarousel from "./components/ImageCarousel";
import SellerProfile from "./components/SellerProfile";
import ListingSidebar from "./components/ListingSidebar";

import star from "../../assets/icons/star.svg";
import ping from "../../assets/icons/ping.svg";
import share from "../../assets/icons/share.svg";

function Listing() {
  const { id } = useParams(); // Get listing ID from URL params
  const [listing, setListing] = useState("");

  // Place Bid Modal
  const [showBidModal, setShowBidModal] = useState(false);
  const [winBid, setWinBid] = useState(false);
  const [leadBid, setLeadBid] = useState(false);

  // Coachmark variables
  const [highlightListing, setHighlightListing] = useState(false);

  // Fetch listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/listings/${id}`);
        setListing(response.data);
      } catch (err) {
        console.error("Error fetching listing:", err);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  // Manage body scrolling
  useEffect(() => {
    // If any modal is open, disable scrolling on the body
    if (showBidModal) {
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when all modals are closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is restored when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBidModal]); // Re-run effect when modal states change

  return (
    <>
      <main className="leading-6 text-[#65605d] ">
        <ListingTutorial
          listing={listing}
          onHighlightListingChange={setHighlightListing}
          onLeadBidChange={setLeadBid}
          onWinBidChange={setWinBid}
          onShowBidModalChange={setShowBidModal}
        />
        <BidModal listing={listing} isOpen={showBidModal} onClose={() => setShowBidModal(false)} />

        <div className="mr-auto ml-auto px-[140px] max-w-[1600px] flex items-center justify-between">
          <div className="bg-white w-full">
            <div className="h-[48px] flex items-center mb-[8px]">
              <p className="text-[12px] text-[#007acd]">Home / Marketplace / Clothing & Fashion</p>
            </div>
            <div className="flex gap-4">
              {/* LEFT COLUMN */}
              <div className="w-[66.6667%]">
                {/* IMAGE CAROUSEL */}
                <ImageCarousel images={listing} highlight={highlightListing} />
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
                  <div className={`flex mb-6 ${highlightListing ? "bg-[#007ACD] text-white rounded-md p-3" : ""}`}>
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Description</h4>
                    <p className="w-[75%] mb-4 ">{listing.description ? listing.description.replace(/\n/g, "<br />") : "No description provided."}</p>
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
                              Pick-up available from {listing.sub_location}, {listing.location}
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
                  <div data-tour="question" className="flex mb-6">
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

              {/* RIGHT COLUMN - SIDEBAR */}
              <ListingSidebar
                listing={listing}
                highlightListing={highlightListing}
                leadBid={leadBid}
                winBid={winBid}
                setShowBidModal={setShowBidModal}
              />
            </div>
            {/* ABOUT THE SELLER */}
            <SellerProfile listing={listing} />
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
    </>
  );
}

export default Listing;
