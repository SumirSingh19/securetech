import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandLogos = [
  { src: "/senheiserlogo.png", alt: "Sennheiser" },
  {
    src: "/britishacousticscommerciallogo2019copy300webp@2x.png",
    alt: "British Acoustics",
  },
  { src: "/qnclogo.png", alt: "QNC" },
  { src: "/christielogo.png", alt: "Christie" },
  { src: "/images2webp@2x.png", alt: "Brand 5" },
  { src: "/sonylogo685450c77eseeklogocomwebp@2x.png", alt: "Sony" },
  { src: "/p9-1@2x.png", alt: "Brand 7" },
  { src: "/boselogo.png", alt: "Bose" },
  { src: "/jbllogo.png", alt: "JBL" },
  { src: "/ciscologo.png", alt: "Cisco" },
  { src: "/p16-1@2x.png", alt: "Brand 11" },
  { src: "/p19@2x.png", alt: "Brand 12" },
  { src: "/lglogo.png", alt: "LG" },
  { src: "/p18@2x.png", alt: "Brand 14" },
  { src: "/p4-1@2x.png", alt: "Brand 15" },
  { src: "/p5-1@2x.png", alt: "Brand 16" },
  { src: "/p4-2@2x.png", alt: "Brand 17" },
  { src: "/p6-1@2x.png", alt: "Brand 18" },
];

const BrandLogo = ({ src, alt }) => (
  <div className="flex items-center justify-center h-32 lg:h-24 max-w-full px-4">
    <div className="relative w-full h-full">
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full object-contain"
        alt={alt}
        src={src}
        loading="lazy"
      />
    </div>
  </div>
);

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const FrameComponent3 = ({ className = "" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <section className={`w-full py-20 lg:py-10 ${className}`}>
      <div className="container mx-auto px-8 lg:px-0">
        <h1 className="text-2.5xl lg:text-lg font-semibold text-center mb-12 tracking-tight font-poppins">
          Our Brands
        </h1>
        <div className="w-full">
          <Slider {...settings}>
            {brandLogos.map((logo, index) => (
              <BrandLogo key={index} {...logo} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
