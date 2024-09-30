import React from "react";
import App from "../components/navbar.jsx";
import Solutionimg from "../components/Solutionhead.jsx";
import IndustrySolutions from "../components/exploresolution.jsx";
import FooterLinks from "../components/FooterLinks";
import Solutionvenue from "../components/solutionvenue.jsx";
import SolutionsContainer from "../components/solutions.jsx";
const Solutionpage = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins overflow-hidden">
      <App />
      <Solutionimg />
      <IndustrySolutions />
      <SolutionsContainer />
      <Solutionvenue />
      <FooterLinks />
    </div>
  );
};

export default Solutionpage;
