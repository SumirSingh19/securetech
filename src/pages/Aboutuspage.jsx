import React from "react";
import App from "../components/navbar.jsx";
import Head from "../components/Head.jsx";
import Body from "../components/AboutBody.jsx";
import Solution from "../components/Aboutsolution.jsx";
import FooterLinks from "../components/FooterLinks";
import FrameComponent2 from "../components/ourclients.jsx";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins overflow-hidden">
      <App />
      <Head />
      <Body />
      <Solution className="my-8" />
      <FrameComponent2 />
      <FooterLinks />
    </div>
  );
};

export default AboutUs;
