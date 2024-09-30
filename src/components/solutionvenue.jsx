import PropTypes from "prop-types";

const Solutionvenue = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center py-40 box-border max-w-full text-center text-17xl text-black font-poppins  ${className}`}
    >
      <div className="w-80 flex flex-col items-center justify-center gap-10 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center">
          <h1 className="m-0 text-5xl lg:text-5xl-2 font-bold">
            Wanna know our venues
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-20 text-base ">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-96 relative tracking-normal leading-normal flex items-center shrink-0">
              <span className="w-full">
                <p className="m-0">
                  Explore the site experiences that trigger better, faster
                  decisions across every
                </p>
                <p className="m-0">team and function.</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5">
            <div className="max-w-full flex flex-row lg:flex-col gap-12 lg:gap-6">
              <img
                className="w-80 lg:w-40 relative object-cover"
                loading="lazy"
                alt=""
                src="/imag2.png"
              />
              <img
                className="w-80 lg:w-40 relative object-cover"
                loading="lazy"
                alt=""
                src="/imag3.png"
              />
              <img
                className="w-80 lg:w-40  relative object-cover"
                loading="lazy"
                alt=""
                src="/imag4.png"
              />
            </div>
            <div className="max-w-full flex flex-row lg:flex-col gap-12 lg:gap-6">
              <img
                className="w-80 lg:w-40  relative object-cover"
                loading="lazy"
                alt=""
                src="/imag5.png"
              />
              <img
                className="w-80 lg:w-40  relative object-cover"
                loading="lazy"
                alt=""
                src="/imag6.png"
              />
              <img
                className="w-80 lg:w-40 relative object-cover"
                loading="lazy"
                alt=""
                src="/imag7.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch hidden bg-gradient-to-r from-blue-500 to-purple-500  flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 [border:none] py-[9.5px] pr-[23px] pl-6 bg-lavender w-[240.7px] rounded flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-lightsteelblue">
            <div className="flex-1 relative text-sm tracking-[1.25px] leading-[21px] uppercase font-semibold font-open-sans text-gray-1000 text-center">
              EXPLORE THE PLATFORM
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

Solutionvenue.propTypes = {
  className: PropTypes.string,
};
export default Solutionvenue;
