import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientLogo = ({ src, alt }) => (
  <div className="flex items-center justify-center px-2">
    <img
      className="h-32 w-auto object-contain max-w-full"
      loading="lazy"
      alt={alt}
      src={src}
    />
  </div>
);

ClientLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const FrameComponent2 = ({ className = "" }) => {
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
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    centerMode: true,
    centerPadding: "0px",
  };

  const clientLogos = [
    { src: "/p2-1@2x.png", alt: "Client 1" },
    { src: "/p1-1@2x.png", alt: "Client 2" },
    { src: "/p17-1@2x.png", alt: "Client 3" },
    { src: "/p14-1@2x.png", alt: "Client 4" },
    { src: "/p12-1@2x.png", alt: "Client 5" },
    { src: "/p10-1@2x.png", alt: "Client 6" },
    { src: "/dslogo.png", alt: "Client 7" },
    { src: "/c1-1@2x.png", alt: "Client 8" },
  ];

  return (
    <section className={`w-full py-20 lg:py-10 ${className}`}>
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="text-2.5xl lg:text-lg font-semibold font-poppins text-center mb-12 tracking-tight">
          Our Clients
        </h1>

        <div className="w-full">
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <ClientLogo key={index} {...logo} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
