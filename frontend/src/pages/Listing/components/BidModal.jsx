function BidModal({ listing, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80">
      <div className="w-full max-w-[784px] rounded-2xl max-h-[86vh] bg-white">
        {/* Modal Header */}
        <div className="max-w-full basis-auto flex relative">
          <h2 className="pl-10 pt-4 pr-16 pb-4 text-[#44413d] text-2xl leading-8 font-bold">Place a bid</h2>
          <div onClick={onClose} className="absolute top-2 right-2 w-auto px-2 py-3 bg-transparent cursor-pointer">
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
        <div className="px-6 pb-4">
          <div className="w-full h-full mb-6 bg-[#f6f5f4] flex">
            <img src={listing.image1} className="w-[192px] h-[144px] object-cover" alt={listing.title} />
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
                className="h-12 w-full border border-[#d7d5d2] px-4 rounded-sm text-[#44413d] cursor-text"
              />
            </div>
            <div className="w-1/2 pt-8 pl-3 flex">
              <div className="py-3 flex">
                <input type="checkbox" className="toggle border-gray-400 text-[#65605d]" />
                <div className="pl-4">Auto-bid</div>
              </div>
            </div>
            {/* Shipping */}
            <div className="mb-4">
              <div className="mb-2 font-medium">Shipping</div>
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
          <button
            onClick={onClose}
            className="btn min-w-8 min-h-8 py-6 px-6 mb-6 bg-transparent w-auto text-[#007acd] text-base border-0 font-normal cursor-pointer"
          >
            Go back to listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default BidModal;
