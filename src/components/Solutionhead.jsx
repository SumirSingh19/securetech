import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Solutionimg = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 [background:linear-gradient(180deg,_#fff,_#ff8022)] overflow-hidden flex flex-row items-center justify-center py-16 box-border gap-20 xl:gap-5 max-w-screen text-left text-21xl text-gray-900 font-open-sans  ${className}`}
    >
      <div className="flex flex-col lg:px-10 items-start justify-start lg:items-center lg:justify-center py-10 box-border max-w-full ">
        <div className="flex flex-col items-start justify-start gap-8 xl:gap-2  max-w-full">
          <h1 className="m-0 relative  xl:text-2.5xl text-inherit tracking-tight leading-tight font-bold font-inherit inline-block max-w-full">
            <p className="m-0 text-6xl lg:text-5xl-2">Improve every process,</p>
            <p className="m-0 text-6xl lg:text-5xl-2">power every outcome.</p>
          </h1>
          <b className="relative text-lg leading-snug uppercase flex text-cyan-500 items-center lg:hidden">
            Venue Based solutions
          </b>
          <div className="relative text-base lg:text-sm leading-tight">
            <p className="m-0 ">
              Empower teams to work faster and smarter by putting data at
            </p>
            <p className="m-0">
              the heart of their everyday work and give them the tools to
            </p>
            <p className="m-0">start uncovering new business value.</p>
          </div>
          <Link
            to="/Contactus"
            className="bg-darkorange-100 box-border no-underline overflow-hidden flex flex-row items-start justify-start pt-[1.5px] pb-0 pr-[15px] pl-5 whitespace-nowrap text-center hover:text-orange-400 hover:bg-white text-sm text-white border-[2px] border-solid border-darkorange-100"
          >
            <div className="relative leading-loose uppercase font-semibold inline-block min-w-[85px]">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      <img
        className="w-2/4 relative max-h-full overflow-hidden object-contain lg:hidden "
        loading="lazy"
        alt=""
        src="/solutionback.jpeg"
      />
    </div>
  );
};

Solutionimg.propTypes = {
  className: PropTypes.string,
};

export default Solutionimg;
