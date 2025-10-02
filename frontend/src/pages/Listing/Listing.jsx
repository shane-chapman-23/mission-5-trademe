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
import placeBid from "../../assets/icons/tut-placebid.svg";
import buyNow from "../../assets/icons/tut-buynow.svg";
import makeOffer from "../../assets/icons/tut-makeoffer.svg";
import confetti from "canvas-confetti"; // Add this import

import ListingTutorial from "./components/ListingTutorial";

import Joyride from "react-joyride";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // Add useRef

function Listing() {
  const { state } = useLocation(); // Router state (contains listing if navigated from Marketplace)
  const [listing] = useState(state?.listing);
  console.log(state);

  // Place Bid Modal
  const [showBidModal, setShowBidModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [winBid, setWinBid] = useState(false);
  const [leadBid, setLeadBid] = useState(false);

  // Coachmark variables
  const [run, setRun] = useState(false);
  const [highlightListing, setHighlightListing] = useState(false); // added
  const [stepIndex, setStepIndex] = useState(0); // Add stepIndex state

  const steps = [
    {
      target: 'h1[data-tour="listing"]',
      content: (
        <div>
          <h4 className="font-extrabold text-left">Step 1: View the listing</h4>
          <br />
          <p className="text-left">Look at the photos, read the title and description, check the condition, specs and extras.</p>
        </div>
      ),
      disableBeacon: true,
      showSkipButton: false,
    },
    {
      target: 'div[data-tour="seller"]',
      placement: "left",
      content: (
        <div>
          <h4 className="font-extrabold text-left">Learn about the seller</h4>
          <br />
          <p className="text-left">
            Member have feedback ratings, the higher rating the more successfully completed positive trades. The more stars the more trustworthy the
            seller.
          </p>
        </div>
      ),

      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'button[data-tour="watchlist"]',
      content: (
        <div>
          <h4 className="font-extrabold text-left">Step 2: Save to Wathclist</h4>
          <br />
          <p className="text-left">Not ready to act? Click Add to Watchlist to save the listing and get updates.</p>
        </div>
      ),

      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="question"]',
      placement: "top",
      content: (
        <div>
          <h4 className="font-extrabold text-left">Step 2: Save to Wathclist</h4>
          <br />
          <p className="text-left">Make sure you are have all the information you need before buying.</p>
          <br />
          <p className="text-left">
            Sellers can answer questions until the listing closes. Its in best interest of seller to provide as much information about their item as
            possible.
          </p>
        </div>
      ),

      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="purchase"]',
      placement: "left-start",
      content: (
        <div>
          <h4 className="font-extrabold text-left ml-14">Step 3: Pick your purchase route</h4>
          <br />
          <p className="text-left ml-14">You've got three doors to ownership:</p>
          <br />
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src={placeBid} />
            <p className="text-left">
              <span className="text-[#4854D3] font-extrabold">Place a Bid - </span>Join the battle and outbid others.
            </p>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src={buyNow} />
            <p className="text-left">
              <span className="text-[#4854D3] font-extrabold">Buy Now - </span>Skip the fight, claim it instantly
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={makeOffer} />
            <p className="text-left">
              <span className="text-[#4854D3] font-extrabold">Make an offer - </span>Make an offer - Try your luck and see if the seller accepts your
              deal.
            </p>
          </div>
        </div>
      ),

      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'button[data-tour="bid"]',
      placement: "left",
      content: "Click here to place a bid",
      // spotlightClicks: true,
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="enterBid"]',
      placement: "left",
      content: "Click here to place a bid",
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="currentBid"]',
      placement: "left-start",
      content: "When you have placed your bid, It should say here that you are leading the bid. ",
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="winBid"]',
      placement: "left-start",
      content: (
        <div>
          <h4 className="font-extrabold text-left">If you win the auction, the item is yours!</h4>
          <br />
          <p className="text-left">You will receive an email to guide you on payment and delivery options.</p>
          <br />
          <p className="text-left">Any more questions, head to our Help page.</p>
        </div>
      ),
      hideBackButton: true,
    },
  ];

  const startTour = () => {
    setShowModal(false);
    setRun(true);
  };

  // Add this useEffect to manage body scrolling
  useEffect(() => {
    // If any modal is open, disable scrolling on the body
    if (showModal || showBidModal) {
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when all modals are closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is restored when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal, showBidModal]); // Re-run effect when modal states change

  // Add ref to track confetti interval
  const confettiIntervalRef = useRef(null);

  // Add cleanup function for confetti
  useEffect(() => {
    return () => {
      if (confettiIntervalRef.current) {
        clearInterval(confettiIntervalRef.current);
      }
    };
  }, []);

  const startConfettiAnimation = () => {
    const duration = 60 * 60 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 500, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    confettiIntervalRef.current = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(confettiIntervalRef.current);
      }

      const particleCount = 30 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

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

        {showBidModal && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80">
            <div className=" w-full max-w-[784px] rounded-2xl max-h-[86vh] bg-white ">
              {/* Modal Header */}
              <div className="max-w-full basis-auto flex relative">
                <h2 className="pl-10 pt-4 pr-16 pb-4 text-[#44413d] text-2xl leading-8 font-bold">Place a bid</h2>
                <div onClick={() => setShowBidModal(false)} className="absolute top-2 right-2 w-auto px-2 py-3 bg-transparent cursor-pointer">
                  <svg
                    className="fill-[#007acd] inline-flex"
                    aria-label="Close dialog window"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    focusable="false"
                    role="img"
                    class="o-svg--scale-to-fill"
                  >
                    <path d="M4.293 19.707a1 1 0 0 0 1.414 0L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414L12 10.586 5.707 4.293a1 1 0 0 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 0 0 0 1.414z"></path>
                  </svg>
                </div>
              </div>
              {/* Modal Body */}
              <div className="px-6 pb-4 ">
                <div className="w-full h-full mb-6 bg-[#f6f5f4] flex">
                  <img src={listing.image1} className="w-[192px] h-[144px] object-cover" />
                  <div className="flex flex-col p-3">
                    <div className="flex text-[#76716d] text-xs leading-4">
                      <div className="pr-2 mr-2 mb-2 border-r border-[#d7d5d2]">
                        {listing.sub_location}, {listing.location}
                      </div>
                      <div className="mb-2">Closes:Sun, 5 Oct</div>
                    </div>
                    <div className="text-sm text-[#44413d] font-medium leading-4">{listing.title}</div>
                    <div className="mt-auto flex flex-col">
                      <div className="mt-2 text-[#76716d] text-xs leading-none">No reserve</div>
                      <div className="text-[#44413d] font-medium leading-5">${listing.start_price}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mb-2">
                  <div data-tour="enterBid" className="w-1/2 pr-3 mb-6">
                    <div className="pr-4 mb-2 font-medium">Your bid</div>
                    <input
                      type="text"
                      placeholder={`$${listing.start_price}`}
                      className="h-12 w-full border border-[#d7d5d2] px-4 rounded-sm text-[#44413d] cursor-text "
                    />
                  </div>
                  <div className="w-1/2 pt-8 pl-3 flex">
                    <div className="py-3 flex">
                      <input type="checkbox" className="toggle border-gray-400  text-[#65605d]" />
                      <div className="pl-4">Auto-bid</div>
                    </div>
                  </div>
                  {/* Shipping */}
                  <div className="mb-4">
                    <div className="mb-2 font-medium ">Shipping</div>
                    <div className="flex py-3 pl-3">
                      <input type="radio" className="radio cursor-pointer" />
                      <div className="pl-3">I will arrange shipping with the seller</div>
                    </div>
                    <div className="flex py-3 pl-3">
                      <input type="radio" className="radio cursor-pointer" />
                      <div className="pl-3">
                        <div>I will arrange shipping with the seller</div>
                        <div className="text-[#76716d] text-xs leading-4">
                          Seller is located in {listing.sub_location}, {listing.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Payment */}
                <div>
                  <p className="mb-2 font-medium">Seller accepts payment by</p>
                  <p>Ping, Cash, NZ Bank Deposit</p>
                  <p className="mb-4 text-xs leading-5">If you win, you are legally obligated to complete your purchase</p>
                </div>
                {/* Reminders */}
                <div className="pt-2 mb-4">
                  <p className="mb-2 font-medium">Reminders</p>
                  <div className="flex mb-4 py-3 pl-3">
                    <input type="checkbox" className="checkbox cursor-pointer" />
                    <div className="pl-3">Email me if I'm outbid</div>
                  </div>
                </div>
              </div>
              {/* Modal Footer */}
              <div className="px-6 pb-6">
                <button className="btn min-w-8 min-h-8 py-6 px-6 mb-6 rounded-b-sm bg-[#007acd] w-auto text-[#fff] text-base border-0 font-medium cursor-pointer">
                  Place Bid
                </button>
                <button className="btn min-w-8 min-h-8 py-6 px-6 mb-6 bg-transparent w-auto text-[#007acd] text-base border-0 font-normal cursor-pointer">
                  Go back to listing
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mr-auto ml-auto px-[140px] max-w-[1600px] flex items-center justify-between">
          <div className="bg-white w-full">
            <div className="h-[48px] flex items-center mb-[8px]">
              <p className="text-[12px] text-[#007acd]">Home / Marketplace / Clothing & Fashion</p>
            </div>
            <div className="flex gap-4">
              {/* LEFT COLUMN */}
              <div className="w-[66.6667%]">
                {/* ---------- IMAGES ---------- */}
                <div className={`${highlightListing ? "bg-red-500 text-white rounded-md p-3" : ""}`}>
                  <div className="carousel h-[50vh] min-h-[400px] max-h-[478px] max-w-[812px]  ">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img src={listing.image1} className="w-[812px] object-cover rounded-2xl" />
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
                      <img src={listing.image2} className="w-full object-cover rounded-2xl" />
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
                      <img src={listing.image3} className="w-full object-cover rounded-2xl" />
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
                      <img src={listing.image4} className="w-full object-cover rounded-2xl" />
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
                      <img src={listing.image1s} className="w-[64px] h-[48px] object-cover" />
                    </a>
                    <a href="#slide2">
                      <img src={listing.image2s} className="w-[64px] h-[48px] object-cover" />
                    </a>
                    <a href="#slide3">
                      <img src={listing.image3s} className="w-[64px] h-[48px] object-cover" />
                    </a>
                    <a href="#slide4">
                      <img src={listing.image4s} className="w-[64px] h-[48px] object-cover" />
                    </a>
                  </div>
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
                  <div className={`flex mb-6 ${highlightListing ? "bg-red-500 text-white rounded-md p-3" : ""}`}>
                    <h4 className="w-[25%] mb-4 text-[#44413d] text-lg font-medium">Description</h4>
                    <p className="w-[75%] mb-4 ">
                      {listing.description.replace(/\n/g, "<br />") || "No description provided."}
                      {/* Excellent condition Apple iPhone 14 Pro Max - 256gb
                      <br />
                      <br />
                      Fully functional, no scratches and in excellent condition Original Apple branded cable included Original box Apple sticker
                      <br />
                      <br />
                      https://support.apple.com/en-us/111846 */}
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
              {/* RIGHT COLUMN - SIDEBAR*/}
              <div className="w-[33.3334%]">
                {/* <div className="bg-yellow-100 col-start-2 row-start-1 row-span-2 "> */}
                <h1
                  data-tour="listing"
                  className={`text-[#44413d] text-3xl leading-10  font-bold mb-4 ${highlightListing ? "bg-red-500 text-white rounded-md p-3" : ""}`}
                >
                  {listing.title}
                </h1>
                <div className="mb-4 min-h-[42px] flex text-[#65605d] items-center">
                  <img src={clock} className="mr-2 inline-flex" />
                  <div className="grow shrink basis-auto">
                    <p className="inline-block">Closes: Fri 26th Sep, 9:07pm</p>
                    <p className="text-xs leading-4 text-[#76716d]">6 days, 8 hours, 53 minutes</p>
                  </div>
                </div>
                <button
                  data-tour="watchlist"
                  className="btn min-w-8 min-h-8 py-6 px-6 mb-4 rounded-b-sm bg-[#f9af2c] w-full text-[#943900] text-[16px] border-0 font-medium cursor-pointer"
                >
                  <img src={magnet} /> Add to Watchlist
                </button>
                <p className="text-sm text-center mb-4 mt-[-8px]">
                  <strong>36</strong> others watchlisted
                </p>
                {/* PRICES - STARTING / BID / ETC */}
                <div className="w-full mb-4 border border-[#d7d5d2] rounded-lg shadow-sm">
                  <div data-tour="purchase">
                    {leadBid ? (
                      <div data-tour="currentBid" className="p-4 ">
                        <p className="text-center">Current bid</p>
                        <h1 className="text-[32px] text-[#44413d] text-center leading-10 mb-4">
                          <strong>$5</strong>
                        </h1>
                        <p className="text-center text-[#1B8840] mb-3 font-bold">You lead the bidding</p>

                        <button className="btn min-w-8 min-h-8 py-6 px-6 mb-2 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer">
                          Place Bid
                        </button>
                        <p className="text-center">Reserve not met</p>
                        <div className="px-3 py-1.5 text-center text-[#007acd] cursor-pointer">6 bids so far - view history</div>
                      </div>
                    ) : winBid ? (
                      <div data-tour="winBid" className="p-4 ">
                        <p className="text-center">Current bid</p>
                        <h1 className="text-[32px] text-[#44413d] text-center leading-10 mb-4">
                          <strong>$100</strong>
                        </h1>
                        <p className="text-center text-[#1B8840] mb-3 font-bold">You have won the auction</p>

                        <button className="btn min-w-8 min-h-8 py-6 px-6 mb-2 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer">
                          Place Bid
                        </button>
                        <p className="text-center">Reserve met</p>
                        <div className="px-3 py-1.5 text-center text-[#007acd] cursor-pointer">20 bids so far - view history</div>
                      </div>
                    ) : (
                      <>
                        {/* BUY NOW */}
                        <div className="p-4">
                          <p className="text-center">Buy Now</p>
                          <h1 className="text-[32px] text-[#44413d] text-center leading-10 mb-6">
                            <strong>${listing.buy_now}</strong>
                          </h1>
                          <button className="btn min-w-8 min-h-8 py-6 px-6 mb-2 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer">
                            Buy Now
                          </button>
                        </div>
                        {/* STARTING PRICE */}
                        <div className="p-4">
                          <div>
                            <p className="text-center">Starting Price</p>
                            <h1 className="text-[32px] text-[#44413d] text-center leading-10 mb-6">
                              <strong>${listing.start_price}</strong>
                            </h1>
                          </div>
                          <button
                            data-tour="bid"
                            onClick={() => setShowBidModal(true)}
                            className="btn min-w-8 min-h-8 py-6 px-6 mb-6 rounded-b-sm bg-[#007acd] w-full text-[#fff] text-[16px] border-0 font-medium cursor-pointer"
                          >
                            Place Bid
                          </button>
                          <p className="text-center">Reserve not met</p>
                          <div className="px-3 py-1.5 text-center text-[#007acd] cursor-pointer">6 bids so far - view history</div>
                        </div>
                      </>
                    )}

                    {/* MAKE AN OFFER */}
                    <div className="border-t border-t-[#d7d5d2] p-4 ">
                      <div className="grid grid-cols-2 py-4 gap-2 items-center">
                        <p className="text-xs leading-4 ">The seller is open to offers on this listing</p>
                        <button className="btn bg-[#c4c0bc40] border-0 text-[16px] text-[#007acd] font-medium text-center whitespace-nowrap min-w-8 min-h-8 p-6 w-auto rounded-sm cursor-pointer">
                          Make an offer
                        </button>
                      </div>
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
                      <p className="text-sm">
                        Pick up available, {listing.sub_location}, {listing.location}
                      </p>
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
                <div data-tour="seller" className={`flex mb-6 px-2 py-4 border border-[#d7d5d2] rounded-lg shadow-sm `}>
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
                    <p className="leading-5 text-sm">
                      Seller located in {listing.sub_location}, {listing.location}
                    </p>
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
                    <div className="shrink basis-auto text-right">{listing.location}</div>
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
