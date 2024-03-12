import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true,
    with: 100,
  };
  return (
    <div>
      <style>{`
    /* Custom styles for the carousel arrows */
    .slick-prev,
    .slick-next {
      width: 50px; /* Adjust width as needed */
      height: 50px; /* Adjust height as needed */
      background-color: rgba(0, 0, 0, 0.5); /* Arrow background color */
      border-radius: 50%; /* Make the arrows circular */
      z-index: 1; /* Ensure arrows appear above the slides */
    }

    .slick-prev {
      left: 10px; /* Adjust position of the previous arrow */
    }

    .slick-next {
      right: 10px; /* Adjust position of the next arrow */
    }

    /* Custom styles for the arrow icons */
    .slick-prev:before,
    .slick-next:before {
      color: white; /* Arrow icon color */
      font-size: 24px; /* Adjust icon size as needed */
    }

    /* Optionally, add hover styles for the arrows */
    .slick-prev:hover,
    .slick-next:hover {
      background-color: rgba(0, 0, 0, 0.8); /* Arrow background color on hover */
    }
  `}</style>
      <Slider {...settings}>
        <div className="w-[350px]">
          <h3>7</h3>
        </div>
        <div className="w-[350px]">
          <h3>8</h3>
        </div>{" "}
        <div className="w-[350px]">
          <h3>9</h3>
        </div>{" "}
        <div className="w-[350px]">
          <h3>10</h3>
        </div>{" "}
        <div className="w-[350px]">
          <h3>11</h3>
        </div>{" "}
        <div className="w-[350px]">
          <h3>12</h3>
        </div>{" "}
      </Slider>
    </div>
  );
};

export default Carousel;
