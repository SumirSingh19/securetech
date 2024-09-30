import React from "react";
import App from "../components/navbar.jsx";
import FooterLinks from "../components/FooterLinks";
import ContactForm from "../components/contactform.jsx";
import Contactsolution from "../components/Contactsolution.jsx";
import Contactbg from "../components/Contactbg.jsx";
const Contactus = () => {
  return (
    <div className=" flex flex-col font-poppins overflow-hidden">
      <App />
      <Contactbg />
      <ContactForm />
      <Contactsolution />
      <FooterLinks />
    </div>
  );
};

export default Contactus;
