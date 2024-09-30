import PropTypes from "prop-types";

const IndustrySolutions = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-20 px-10 box-border max-w-full text-center text-21xl text-black font-open-sans ${className}`}
    >
      <div className="w-96 flex flex-col text-center gap-3 max-w-full">
        <h1 className="m-0 p-5 relative text-lg leading-normal font-bold font-inherit text-orange-500 ">
          Explore AV solutions
        </h1>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-10 box-border max-w-full lg:text-smi text-base">
          <div className="h-20 flex-1 relative leading-normal lg:leading-snug flex items-center max-w-full">
            <span>
              <p className="m-0 ">
                Learn more about SecureTech AV’s venue solutions and how you can
                put data to work and accomplish more in your sector.
              </p>
            </span>
          </div>
        </div>
        {/* <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-sm">
          <a href="" className=" relative leading-[40px] uppercase font-semibold text-[inherit] flex hover:text-blue-600 items-center justify-center shrink-0  whitespace-nowrap">
            Learn More
          </a>
        </div> */}
      </div>
    </section>
  );
};

IndustrySolutions.propTypes = {
  className: PropTypes.string,
};

export default IndustrySolutions;
