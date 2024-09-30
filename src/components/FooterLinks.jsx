import React from "react";
import PropTypes from "prop-types";

const FooterLinks = ({ className = "" }) => {
  return (
    <footer
      className={`max-w-full font-poppins bg-slate-900 flex flex-col text-white ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-5 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        <SocialLink
          href="https://www.linkedin.com/company/securetechav-designs/"
          src="/linkdin.svg"
          alt="LinkedIn"
        />
        <SocialLink
          href="https://instagram.com/secuetechav?utm_source=qr"
          src="/instagram.svg"
          alt="Instagram"
        />
        <SocialLink
          href="https://www.facebook.com/profile.php?id=61553741201034&mibextid=LQQJ4d"
          src="/facebook.svg"
          alt="Facebook"
        />
      </div>

      <div className="flex flex-row lg:flex-col gap-8 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-20 py-8">
        <CompanyInfo />
        <MapSection />
        <Sitemap />
        <DownloadSection />
      </div>

      <Copyright />
    </footer>
  );
};

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img
      className="cursor-pointer h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
      alt={alt}
      src={src}
    />
  </a>
);

const CompanyInfo = () => (
  <div className="flex flex-col w-96 lg:w-4/5  items-center 2xl:items-start space-y-4">
    <div className="flex items-center space-x-2">
      <img
        src="/image-5@2x.png"
        alt="Company Logo"
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
      <span className="text-lg lg:text-mini font-semibold">SecureTech AV</span>
    </div>
    <p className="text-white text-sm lg:text-xs 2xl:max-w-full sm:text-base text-left font-poppins">
      Secure TechAV Designs Private Limited is driven by a passion for absolute
      technology. Our company is a sound unit comprising eminent audio engineers
      & top of the league infrastructure. The core strength of the company is
      Architectural Acoustics, sound system designing, project execution with
      skilled workforce & post-project service.
    </p>
  </div>
);

const MapSection = () => (
  <div className="flex flex-col space-y-4">
    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6174.160431626374!2d77.3509790616948!3d28.588703179313608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51b9a3bb81f%3A0x806219bd741a009f!2sSECURETECH%20AV%20DESIGNS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1716970778201!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="rounded"
      ></iframe>
    </div>
    <address className="text-white lg:text-xs text-sm sm:text-base font-poppins">
      <span className="text-chocolate font-poppins">Company Address</span>
      <span className="font-poppins">
        : SecureTech AV Designs Private Limited A-70-SECTOR 33 NOIDA, UTTAR
        PRADESH, 201301
      </span>
    </address>
  </div>
);

const Sitemap = () => (
  <div className="flex flex-col items-center sm:items-start gap-4">
    <h3 className="text-lg lg:text-mini font-semibold tracking-normal">
      Sitemap
    </h3>
    <nav className="flex flex-col lg:text-xs items-center sm:items-start gap-2 text-sm sm:text-base">
      <NavLink href="/" text="Home" />
      <NavLink href="/Solutionpage" text="AV Solutions" />
      <NavLink href="/AboutUs" text="About Us" />
      <NavLink href="#" text="Our Projects" />
      <NavLink href="/Contactus" text="Contact Us" />
    </nav>
  </div>
);

const NavLink = ({ href, text }) => (
  <a
    href={href}
    className="tracking-tight no-underline leading-snug font-light text-inherit hover:underline cursor-pointer"
  >
    {text}
  </a>
);

const DownloadSection = () => (
  <div className="flex flex-col lg:text-xs items-center sm:items-start space-y-4">
    <h3 className="text-lg lg:text-mini font-semibold">
      Check out our Corporate Profile
    </h3>
    <a
      href="https://drive.google.com/file/d/1VDGplc_6wfvQ7Y9-0vvbBtACm-72q_Cj/view"
      download
      className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white no-underline font-bold py-2 px-4 rounded transition duration-300"
    >
      Download
    </a>
  </div>
);

const Copyright = () => (
  <div className="w-full lg:text-xs flex flex-col items-center lg:items-start justify-center p-4 lg:p-1 text-xs sm:text-sm text-white font-poppins">
    <div className="mb-2 border-r border-white pr-4 lg:pr-0">
      © 2024 SecureTech AV Private Limited
    </div>
    <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-1">
      <span>Privacy Policy |</span>
      <span className="border-l border-white ">
        {" "}
        Cookie Policy & Settings |
      </span>
      <span className="border-l border-white "> Our Policies </span>
    </div>
  </div>
);

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;
