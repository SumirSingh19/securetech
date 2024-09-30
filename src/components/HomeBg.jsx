import React from "react";
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`relative flex flex-col xl:px-10 contrast-125 w-screen max-h-dvh items-start lg:justify-center justify-start py-10 md:py-5 bg-[url('/Banner.gif')] bg-cover bg-no-repeat bg-top text-left font-poppins ${className}`}
    >
      <div className="container  mx-auto px-4 py-40 lg:py-20 lg:px-2">
        <h1 className="text-8xl items-start justify-start lg:px-2  md:text-6xl xl:text-7xl font-normal lg:leading-none mb-6  lg:m-0">
          <span className="text-orange-500 lg:text-2xl">
            Elevating Experiences,{" "}
          </span>
          <br className=" md:block" />
          <span className="text-gray-800 lg:text-2xl">
            Redefining Technology
          </span>
        </h1>
        <p className="text-white items-start justify-start text-left 2xl:ml-2 pb-10 px-2 text-mid md:text-lg lg:text-base max-w-2xl mb-8 lg:mb-12">
          We provide tailored, cutting-edge audio and video solutions. Whether
          enhancing home entertainment, optimizing business conferencing, or
          creating a state-of-the-art media room, our experts are here to guide
          you.
        </p>
        <div className="flex flex-row sm:flex-row lg:pl-2  justify-start items-center gap-4">
          <a
            href="/AboutUs"
            className="inline-flex items-center justify-center lg:text-base no-underline px-6 py-3 bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl text-lg font-poppins transition-colors duration-300"
          >
            <span>Learn more</span>
            <img
              className="h-6 w-6 ml-2"
              loading="lazy"
              alt=""
              src="arow-unscreen.gif"
            />
          </a>
          <a
            href="/Contactus"
            className="relative px-8 py-3 text-lg lg:text-base no-underline hover:text-orange-500 text-center text-white flex items-center justify-center hover:border-orange-500 group"
          >
            Contact Us
            <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="absolute top-0 left-0 h-0 w-0.5 bg-white transition-all duration-500 ease-out group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 h-0 w-0.5 bg-white transition-all duration-500 ease-out group-hover:h-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
