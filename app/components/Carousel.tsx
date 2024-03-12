import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    with: 100,
  };
  return (
    <div>
      <Slider {...settings} className="z-0 w-[1080px] gap-2">
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
        <div className="min-w-[300px] max-w-[300px] bg-slate-600 overflow-hidden">
          <h3 style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            7
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
