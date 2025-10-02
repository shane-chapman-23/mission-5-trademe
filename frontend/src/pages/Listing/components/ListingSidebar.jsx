import clock from "../../../assets/icons/clock.svg";
import magnet from "../../../assets/icons/magnet.svg";
import truck from "../../../assets/icons/truck.svg";
import location from "../../../assets/icons/location.svg";
import shield from "../../../assets/icons/shield.svg";
import star from "../../../assets/icons/star.svg";

function ListingSidebar({ listing, highlightListing, leadBid, winBid, setShowBidModal }) {
  return (
    <div className="w-[33.3334%]">
      <h1
        data-tour="listing"
        className={`text-[#44413d] text-3xl leading-10 font-bold mb-4 ${highlightListing ? "bg-[#007ACD] text-white rounded-md p-3" : ""}`}
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
        <span>covers you up to $2,500 on this item when you pay with Ping or Afterpay if your item doesn't show up or isn't as described.</span>
        <p className="text-sm text-[#007acd]">Learn more about Buyer Protection</p>
      </div>
      {/* SELLER */}
      <div data-tour="seller" className="flex mb-6 px-2 py-4 border border-[#d7d5d2] rounded-lg shadow-sm">
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
  );
}

export default ListingSidebar;
