import star from "../../../assets/icons/star.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";
import addFav from "../../../assets/icons/addFav.svg";

function SellerProfile({ listing }) {
  return (
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
  );
}

export default SellerProfile;
