import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`relative gap-14 py-20 bg-transparent w-full max-w-full ${className}`}
    >
      <h2 className="text-center text-black font-poppins lg:text-lg font-semibold text-2.5xl">
        Solutions and Services
      </h2>

      <Slider
        {...settings}
        className="flex items-center justify-center gap-8 ml-10 lg:pt-10 px-4 sm:px-1"
      >
        <div className="flex flex-col items-start justify-start pt-0 pb-16 lg:pb-5 pr-0 pl-3 lg:pl-0 box-border gap-8 max-w-[95%] bg-white rounded-4 ">
          <div className="max-w-full sm:max-w-[70%] mx-auto items-center justify-center relative">
            <img
              className=" w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/imaag2.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-start justify-center py-5 px-10 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-black tracking-[-0.05em] px-10 font-normal font-poppins z-1 lg:text-lg-5 2xl:text-1.89vmax">
              Architectural Acoustics
            </h2>
            <div className="self-stretch relative text-1vmax lg:text-sm tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 list font-poppins text-inherit ">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 lg:pb-5 pr-0 pl-3 lg:pl-0 box-border relative gap-8 max-w-[95%] bg-white rounded-4 ">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/imag12.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-start justify-center py-5 px-10 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-black tracking-[-0.05em] px-10 font-normal font-poppins z-1 lg:text-lg-5 2xl:text-1.89vmax">
              Audio Visual
            </h2>
            <div className="self-stretch relative text-1vmax lg:text-sm inline-block shrink-0 z-1">
              <ul className="m-0 list font-poppins text-inherit">
                <li>Custom audio-visual system design</li>
                <li>Installation and integration of AV systems</li>
                <li>High-definition projection systems...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 lg:pb-5 pr-0 pl-3 lg:pl-0 box-border relative gap-8 max-w-[95%] bg-white rounded-4 ">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="imag9.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-start justify-center py-5 px-10 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-black tracking-[-0.05em] px-10 font-normal font-poppins z-1 lg:text-lg-5 2xl:text-1.89vmax">
              Information Technology
            </h2>
            <div className="self-stretch relative text-1vmax lg:text-sm tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 list font-poppins text-inherit ">
                <li className="mb-0">
                  Network infrastructure design and implementation
                </li>
                <li className="mb-0">Unified communications solutions</li>
                <li>Data center planning and management...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 lg:pb-5 pr-0 pl-3 lg:pl-0 box-border relative gap-8 max-w-[95%] bg-white rounded-4 ">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/imaag1.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-start justify-center py-5 px-10 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-black tracking-[-0.05em] px-10 font-normal font-poppins z-1 lg:text-lg-5 2xl:text-1.89vmax">
              Light Architectures
            </h2>
            <div className="self-stretch relative text-1vmax lg:text-sm tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 list font-poppins text-inherit ">
                <li className="mb-0">Lighting design and consultancy</li>
                <li className="mb-0">
                  {" "}
                  LED and architectural lighting solutions
                </li>
                <li>Dynamic lighting control systems...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 lg:pb-5 pr-0 pl-3 lg:pl-0 box-border relative gap-8 max-w-[95%] bg-white rounded-4">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/imag11.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-start justify-center py-5 px-10 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-black tracking-[-0.05em] px-10 font-normal font-poppins z-1 lg:text-lg-5 2xl:text-1.89vmax">
              Project Management
            </h2>
            <div className="self-stretch relative text-1vmax lg:text-sm tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 list font-poppins text-inherit">
                <li className="mb-0">
                  Comprehensive project planning and execution
                </li>
                <li className="mb-0">Project oversight and coordination</li>
                <li>Timely delivery and budget adherence...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 lg:pb-5 pr-0 pl-3 lg:pl-0 box-border relative gap-8 max-w-[95%] bg-white rounded-4">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className=" max-w-full h-auto relative rounded-16 sm:rounded-0 object-contain z-1"
              alt=""
              src="/imag10.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-start justify-center py-5 px-10 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-black tracking-[-0.05em] px-10 font-normal font-poppins z-1 lg:text-lg-5 2xl:text-1.89vmax">
              Post Project Services
            </h2>
            <div className="self-stretch relative text-1vmax lg:text-sm tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit">
                <li className="mb-0">
                  Maintenance contracts for AV, lighting, and ICT systems
                </li>
                <li className="mb-0">Upgrades and system optimization</li>
                <li>On-call technical support and troubleshooting...</li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
