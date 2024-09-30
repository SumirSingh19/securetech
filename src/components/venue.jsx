import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Venue = ({ className = "" }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const slides = [
    {
      image:
        "/pikaso-texttoimage-educationalinstitutionsschoolsanduniversities-1@2x.png",
      text: "Auditorium",
    },
    {
      image: "/imag2.png",
      text: "Residential Spaces",
    },
    {
      image: "/imag3.png",
      text: "Hospitality Sector",
    },
    {
      image: "/imag4.png",
      text: "Conference room",
    },
    {
      image: "/imag6.png",
      text: "Commercial Places",
    },
    {
      image: "/imag7.png",
      text: "Entertainment",
    },
  ];

  return (
    <section
      className={`relative left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center justify-center gap-14 py-20 text-left text-51xl text-black font-poppins ${className}`}
    >
      <div className="w-full flex flex-row items-center justify-center py-0 px-5 box-border">
        <h1 className="m-0 max-w-full text-center tracking-[-0.05em] font-semibold lg:text-lg font-poppins inline-block shrink-0 text-2.5xl">{`Venues & Spaces`}</h1>
      </div>

      <div className="w-full flex flex-row relative items-center justify-center gap-[2px] lg:gap-[2px] text-center font-poppins">
        <button
          className="absolute left-20 cursor-pointer pt-2 pb-[13px] px-4 bg-transparent rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-steelblue-500 hover:box-border hover:border-steelblue-200 z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <div className="text-32xl-2 font-roboto text-deepskyblue text-center flex items-center justify-center">
            {"‹"}
          </div>
        </button>

        <div className="w-full h-auto flex flex-row items-center justify-center pt-0 pb-8 px-5 box-border">
          <Slider ref={sliderRef} {...settings} className="w-full flex flx-col">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center py-0 px-4 box-border"
              >
                <div className="max-w-[60%] mx-auto sm:max-w-[100%]">
                  <img
                    className="w-full h-auto max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src={slide.image}
                  />
                </div>
                <div className="w-full text-center py-2 flex items-center justify-center h-16">
                  <p className="text-black font-medium text-lg-5 lg:text-mini">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button
          className="absolute right-20 cursor-pointer pt-2 pb-[13px] pr-4 pl-[17px] bg-transparent rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-steelblue-500 hover:box-border hover:border-steelblue-200 z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <div className="text-32xl-2 font-roboto text-deepskyblue text-center flex items-center justify-center">
            {"›"}
          </div>
        </button>
      </div>
    </section>
  );
};

Venue.propTypes = {
  className: PropTypes.string,
};

export default Venue;
