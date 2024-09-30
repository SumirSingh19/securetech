import React from "react";
import PropTypes from "prop-types";

const Contactbg = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center max-w-full h-96 lg:h-28 bg-no-repeat bg-center bg-cover  ${className}`}
      style={{ backgroundImage: "url('contactbg.webp')" }}
    >
      <div className="flex items-center justify-center">
        <h1 className="text-white text-center text-4xl font-bold">Contact</h1>
      </div>
    </div>
  );
};

Contactbg.propTypes = {
  className: PropTypes.string,
};

export default Contactbg;
