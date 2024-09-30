import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const ContactForm = ({ className = "" }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oslql4g", "template_hvwdaqg", form.current, {
        publicKey: "dOG8NY3cIaRMiwlBj",
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            company: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      className={`flex flex-row lg:flex-col py-28 lg:py-14 items-start lg:items-center justify-center gap-60 xl:gap-20 text-left text-base text-black font-poppins ${className}`}
      onSubmit={handleSubmit}
    >
      {" "}
      <div className="flex flex-col items-center justify-center max-w-full 2xl:pl-3 xl:pl-0 ">
        <div className="flex flex-col items-start xl:px-4 justify-start gap-5 max-w-full">
          <div className="flex flex-col items-start justify-start text-29xl">
            <h1 className="m-0 mt-10 tracking-normal leading-normal font-semibold">
              Get in Touch with
            </h1>
            <div className="flex flex-row items-start justify-start gap-8 lg:gap-4 text-orange-500">
              <h1 className="m-0 tracking-normal leading-normal font-semibold">
                Securetech AV Designs
              </h1>
              <img
                className="h-12 w-12 "
                loading="lazy"
                alt=""
                src="/hand1.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start text-sm justify-start text-darkslategray-400">
            <p className="m-0 leading-normal">
              Feel free to connect with us for any of your needs regarding our
            </p>
            <p className="m-0 leading-normal">
              services. Our support team is ready to solve any of your issues.
            </p>
            <p className="m-0 leading-normal">
              Just push a text to us and we will get back to you immediately.
            </p>
          </div>
          <h3 className="text-gray-300">INDIA</h3>
          <div className="w-1/2 flex flex-row items-start justify-start pb-3.5 border-t-2 border-solid border-darkslategray-500"></div>
          <div className="w-1/2 flex flex-col items-start justify-start gap-3 text-darkslategray-500">
            <div className="flex flex-row items-start justify-start gap-3">
              <img
                className="h-5 w-5 mt-1"
                loading="lazy"
                alt=""
                src="/locator.png"
              />
              <div className="leading-normal lg:w-80">
                A-70-SECTOR 33 NOIDA, UTTAR PRADESH, 201301
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-3">
              <img
                className="h-5 w-5 mt-1"
                loading="lazy"
                alt=""
                src="/message.png"
              />
              <div className="leading-normal whitespace-nowrap">
                ashish@securetechav.com
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-3">
              <img
                className="h-5 w-5 mt-1"
                loading="lazy"
                alt=""
                src="/phone.png"
              />
              <div className="leading-normal whitespace-nowrap">
                +91 7017247344
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-900 lg:max-w-full mr-3 sm:mx-0 flex-col lg:rounded-lg items-start justify-center py-5 sm:pb-5 px-10 sm:pr-5 sm:pl-5 gap-2.5 lg:gap-0 text-white">
        <h1 className="font-poppins font-semibold items-start">
          Drop Us A Message
        </h1>
        <div className="w-1/2 flex flex-col items-start justify-start pb-2 gap-6">
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="flex flex-row items-start justify-start pt-3 pb-3 border-b-[1px] border-solid border-slategray">
              <input
                className="w-96 lg:w-60 bg-[transparent] h-6 text-white"
                placeholder="Name*"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row items-start justify-start pt-3 pb-3 border-b-[1px] border-solid border-slategray">
              <img
                className="w-10 h-6 object-contain"
                loading="lazy"
                alt=""
                src="/flag.png"
              />
              <input
                className="w-80 lg:w-60 bg-[transparent] h-6 text-white"
                placeholder="Phone No.*"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row items-start justify-start pt-3 pb-3 border-b-[1px] border-solid border-slategray">
              <input
                className="w-96 lg:w-60 bg-[transparent] h-6 text-white"
                placeholder="Email*"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row items-start justify-start pt-3 pb-3 border-b-[1px] border-solid border-slategray">
              <input
                className="w-96 lg:w-60 bg-[transparent] h-6 text-white"
                placeholder="Company*"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row items-start justify-start pt-3 pb-3 border-b-[1px] border-solid border-slategray">
              <input
                className="w-96 lg:w-60 bg-[transparent] h-6 text-white"
                placeholder="Location*"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className="bg-transparent h-60 w-96 lg:w-60 text-white border-b-[1px] py-4 border-solid border-slategray"
              placeholder="Message (Optional)"
              rows="10"
              cols="28 lg:18"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            className="cursor-pointer bg-orange-500 hover:bg-orange-800 rounded-lg text-white px-36 lg:px-10 py-5 flex flex-row items-end justify-start gap-2.5 border-[1px] border-solid border-aquamarine"
            type="submit"
          >
            <div className="text-base leading-normal capitalize font-normal">
              Connect with Securetech today
            </div>
            <img className="h-4 w-4 pb-1" alt="" src="/Icon.png" />
          </button>
        </div>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
