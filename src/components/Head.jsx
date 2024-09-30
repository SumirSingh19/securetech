import React from "react";
import PropTypes from "prop-types";
import image1 from "/imaaag.jpg";
import image2 from "/Auditorium.jpeg";
import image3 from "/conference.jpg";
import image4 from "/Kramer.jpg";

const Head = ({ className = "" }) => {
  return (
    <div
      className={`p-12 items-center justify-center lg:overflow-hidden bg-gradient-to-r from-orangered-200 to-orange-600 ${className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white lg:text-center font-poppins text-4xl lg:text-lg font-bold mb-6">
          About SecureTech AV
        </h1>
        <p className="text-white text-lg lg:text-sm lg:px-4 font-poppins flex flex-col px-20 mb-8">
          At SecureTech AV Designs Private Limited, our mission is to engineer
          seamless, immersive experiences by harmonizing technology, design, and
          innovation. We strive to pioneer cutting-edge solutions, exceed
          expectations, and amplify the way the world interacts with
          audiovisuals, architecture, and technology.
        </p>
      </div>
      <div className="flex flex-row lg:flex-row lg:hidden items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-10 mb-2">
          <img src={image1} alt="Event" className="w-96 mt-1 max-h-60" />
          <img src={image3} alt="Auditorium" className="w-96 max-h-60" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <img src={image2} alt="Conference Room" className="w-96 max-h-60" />
          <img src={image4} alt="Classroom" className="w-96 max-h-60" />
        </div>
      </div>
    </div>
  );
};

Head.propTypes = {
  className: PropTypes.string,
};

export default Head;
