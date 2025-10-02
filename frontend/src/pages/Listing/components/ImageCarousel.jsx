import left from "../../../assets/icons/left-white.svg";
import right from "../../../assets/icons/right-white.svg";

function ImageCarousel({ images, highlight }) {
  // Destructure images for cleaner code
  const { image1, image2, image3, image4, image1s, image2s, image3s, image4s } = images;

  return (
    <div className={`${highlight ? "bg-[#007ACD] text-white rounded-md p-3" : ""}`}>
      <div className="carousel h-[50vh] min-h-[400px] max-h-[478px] max-w-[812px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-[812px] object-cover rounded-2xl" />
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
          <img src={image2} className="w-full object-cover rounded-2xl" />
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
          <img src={image3} className="w-full object-cover rounded-2xl" />
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
          <img src={image4} className="w-full object-cover rounded-2xl" />
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
          <img src={image1s} className="w-[64px] h-[48px] object-cover" />
        </a>
        <a href="#slide2">
          <img src={image2s} className="w-[64px] h-[48px] object-cover" />
        </a>
        <a href="#slide3">
          <img src={image3s} className="w-[64px] h-[48px] object-cover" />
        </a>
        <a href="#slide4">
          <img src={image4s} className="w-[64px] h-[48px] object-cover" />
        </a>
      </div>
    </div>
  );
}

export default ImageCarousel;
