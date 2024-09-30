import React from "react";
import PropTypes from "prop-types";

const FooterLeft = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col-3 2xl:grid 2xl:grid-cols-3 2xl:gap-50 lg:flex-row items-center justify-center px-10 gap-10 lg:gap-9 max-w-full lg:flex-wrap text-center text-11xl text-white font-sans ${className}`}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-2">
          <img src="/image-5@2x.png" alt="Company Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">SecureTech AV</span>
        </div>
        <p className="text-white font-poppins">
          Secure TechAV Designs Private Limited is driven by a passion for
          absolute technology. Our company is a sound unit comprising eminent
          audio engineers & top of the league infrastructure. The core strength
          of the company is Architectural Acoustics, sound system designing,
          project execution with skilled workforce & post-project service.
        </p>
      </div>
      <div className="flex flex-col lg:py-2 space-y-4">
        <div className="w-full h-auto gap-5 mt-[2px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6174.160431626374!2d77.3509790616948!3d28.588703179313608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51b9a3bb81f%3A0x806219bd741a009f!2sSECURETECH%20AV%20DESIGNS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1716970778201!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>
        <address className="text-white font-poppins h-full">
          <span className="text-chocolate font-poppins">Company Address</span>
          <span className="font-poppins">
            : Secure TechAV Designs Private Limited A-70-SECTOR 33 NOIDA, UTTAR
            PRADESH, 201301
          </span>
        </address>
      </div>
      <div className="top-0 left-0 flex flex-col items-center justify-center gap-4 py-5 text-lg p-5">
        <div className="tracking-tighter leading-snug font-semibold">
          Sitemap
        </div>
        <div className="flex flex-col items-start justify-start gap-2 text-base hover:no-underline">
          <a
            className="tracking-tight leading-snug font-light text-inherit hover:font-bold cursor-pointer"
            href="https://www.figma.com/design/IApfjMwLHH2HcQEzFuA1Df?node-id=528-2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
          <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
            AV Solutions
          </div>
          <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
            About Us
          </div>
          <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
            Our Projects
          </div>
          <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
            Venues
          </div>
          <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLeft.propTypes = {
  className: PropTypes.string,
};
export default FooterLeft;
