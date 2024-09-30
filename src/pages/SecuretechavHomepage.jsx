import React from 'react';
import Component from "../components/solutioncards.jsx";
import Venue from "../components/venue.jsx";
import VenueSpacesContainer from "../components/whysecure2.jsx";
import FrameComponent from "../components/contactsecure.jsx";
import FrameComponent1 from "../components/review.jsx";
import FrameComponent2 from "../components/ourclients.jsx";
import FrameComponent3 from "../components/ourbrands.jsx";
import FooterLinks from "../components/FooterLinks";
import App from '../components/navbar.jsx';
import HeroContent from '../components/HomeBg.jsx';
const SecuretechavHomepage = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div><App />
      </div>
      <main className="flex flex-col items-center space-y-8">
        {/* <MySection /> */}
        < HeroContent />
        <Component />
        <Venue />
        <VenueSpacesContainer />
        <FrameComponent />
        <FrameComponent1 />
        <FrameComponent2 />
        <FrameComponent3 />
      </main>
      <footer className="w-full bg-slate-900 flex flex-col items-center justify-center p-4 lg:p-0">
        <FooterLinks />
      </footer>
    </div>
  );
};

export default SecuretechavHomepage;
