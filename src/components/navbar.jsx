import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row px-5 lg:px-1 items-center justify-between flex-wrap">
      <a
        href="/"
        className="flex items-center flex-shrink-0 text-white mr-6 2xl:mr-72"
      >
        <img
          src="image-5@2x.png"
          className="w-150 h-20 lg:w-10 lg:h-10 py-1 mr-2"
          alt="Logo"
        />
        <span className="text-4xl-3 lg:text-mini  text-black font-poppins font-bold">
          SecureTech AV Designs
        </span>
      </a>
      <div className="block 2xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block 2xl:flex font-poppins 2xl:items-center 2xl:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm">
          <a
            href="/"
            className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 relative overflow-hidden group no-underline"
          >
            <span className="relative z-10 ">Home</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="/AboutUs"
            className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 relative overflow-hidden group no-underline"
          >
            <span className="relative z-10">About Us</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="/Solutionpage"
            className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 relative overflow-hidden group no-underline"
          >
            <span className="relative z-10">Solution</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="https://drive.google.com/file/d/1VDGplc_6wfvQ7Y9-0vvbBtACm-72q_Cj/view"
            className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 relative overflow-hidden group no-underline"
          >
            <span className="relative z-10">Corporate Profile</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="/Contactus"
            className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 relative overflow-hidden group no-underline"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        <div>
          {/* <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white no-underline hover:underline">
           Sign In
         </button> */}
        </div>
      </div>
    </nav>
  );
}
export default App;
