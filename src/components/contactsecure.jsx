import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full flex flex-col items-center justify-center gap-10 py-40 lg:py-5 bg-slate-200 px-10 box-border text-center text-5xl text-darkslategray-200 font-sans lg:flex-col ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-14 lg:gap-5 py-2.5 lg:flex-col lg:items-center lg:justify-center">
        <div className="flex flex-col 2xl:mt-[70px] items-center justify-center 2xl:items-start 2xl:justify-start gap-5 lg:items-center lg:justify-center lg:gap-5">
          <div className="w-60 rounded-2xl bg-whitesmoke flex flex-col items-start justify-start pl-5 box-border relative shrink-0">
            <h3 className="m-0 text-gray-400 font-poppins pb-4 leading-tight text-lg lg:text-base 2xl:text-base xl:text-xl">
              Ready to elevate your tech?
            </h3>
            <div className="h-4 w-7 absolute -bottom-3.5 left-12 box-border border-t-[15px] border-solid border-whitesmoke border-r-[15px] border-l-[15px]" />
          </div>
          <img
            className="w-36 h-auto object-contain mx-auto lg:w-24 xl:w-28 2xl:w-36"
            loading="lazy"
            alt=""
            src="/scott2xpng@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col text-left items-center justify-start gap-1 lg:gap-0  text-gray-400 font-poppins">
          <h1 className="self-stretch text-transparent bg-clip-text bg-gradient-to-r from-[#c83a8c] to-[#3498db] font-bold leading-tight text-2.5xl lg:text-5xl-2">
            Contact SecureTech AV now!
          </h1>
          <div className="flex flex-col items-start justify-center gap-10 lg:gap-5">
            <h2 className="text-black items-center justify-center font-medium text-1vh leading-5 text-base">
              <p className="text-base lg:text-sm">
                Transform your space with SecureTech AV's cutting-edge
                solutions.From audio-visual integration{" "}
              </p>
              <p className="text-base lg:text-sm">
                to dynamic lighting and acoustics, we deliver
                customized,innovative technology
              </p>
              <p className="text-base lg:text-sm">
                tailored to your needs. Our expert team ensures seamless
                implementation
              </p>
              <p className="text-base lg:text-sm">and ongoing support.</p>
            </h2>
            <Link to="/ContactUs" className="no-underline">
              <button className="cursor-pointer py-2 px-5 bg-orange-500 mb-2 rounded-2xl flex items-start justify-start text-white hover:text-orange-500 hover:font-bold border-2 border-orange-300 hover:bg-white hover:border-white">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
