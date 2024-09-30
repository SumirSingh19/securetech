import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Contactsolution = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row lg:flex-col gap-x-96 xl:gap-x-20 lg:gap-10 py-32 lg:py-20 h-auto w-full items-center justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-lg text-black font-poppins ${className}`}
    >
      <div className=" flex flex-col lg:bg-slate-300 items-start lg:items-center lg:max-w-full mb-11 px-10 lg:px-5 py-10 lg:py-20 rounded-2xl shadow-2xl ">
        <h1 className="m-0 tracking-normal lg:text-5xl-2 font-semibold text-shadow-md">
          Get Ready to get
        </h1>
        <h1 className="m-0 tracking-normal font-semibold -mt-1 text-shadow-md">
          <span className="lg:text-5xl-2">Your </span>
          <span className="text-orange-500 lg:text-5xl-2">AV Solution</span>
        </h1>
        <div className="relative flex flex-row  items-center gap-3">
          <div className="p-4 border border-gray-500 rounded">
            <span className="text-base leading-normal">
              info@securetech.com
            </span>
          </div>
          <div className="p-4 border border-gray-500 rounded">
            <span className="text-base leading-normal">+91 7008166042</span>
          </div>
        </div>
      </div>
      <div className="border-gray-1500 flex flex-col items-start justify-start lg:items-center lg:justify-center gap-6 lg:gap-0 text-base">
        <div className="flex flex-row gap-20 xl:gap-5 lg:text-sm  text-base">
          <div className="flex flex-col gap-5">
            <h3 className="m-0 tracking-[-0.5px] leading-normal font-semibold">
              Quick Links
            </h3>
            <Link
              to="/"
              className="leading-6 text-black no-underline hover:underline"
            >
              Home
            </Link>
            <Link
              to="/AboutUs"
              className="leading-6 text-black no-underline hover:underline"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="leading-6 text-black no-underline hover:underline"
            >
              Services
            </Link>
            <Link
              to="#"
              className="leading-6 text-black no-underline hover:underline"
            >
              Corporate Profile
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="m-0 tracking-[-0.5px] leading-normal font-semibold">
              Services
            </h3>
            <Link
              to="/Solutionpage"
              className="leading-6 text-black no-underline hover:underline"
            >
              Audio Visual
            </Link>
            <Link
              to="/Solutionpage"
              className="leading-6 text-black no-underline hover:underline"
            >
              Architecture Acoustics
            </Link>
            <Link
              to="/Solutionpage"
              className="leading-6 text-black no-underline hover:underline"
            >
              Post project management
            </Link>
            <Link
              to="/Solutionpage"
              className="leading-6 text-black no-underline hover:underline"
            >
              Information Technology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Contactsolution.propTypes = {
  className: PropTypes.string,
};

export default Contactsolution;
