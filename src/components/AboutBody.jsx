import React from "react";
import PropTypes from "prop-types";
import image1 from "/whoweare.jpg";
import image2 from "/confe.png";
import image3 from "/imagge.jpg";
import image4 from "/process.png";
import image5 from "/imaga.png";

const Body = ({ className = "" }) => {
  return (
    <div className={`px-40 xl:px-10 lg:px-2 py-10 ${className}`}>
      <h2 className="text-orange-500 text-2xl lg:px-8 lg:mb-5 mb-10 lg:text-mini">
        Our Pillars
      </h2>

      <div className="grid gap-20 lg:items-center">
        <div className="flex flex-row lg:flex-col lg:items-center lg:shadow-lg items-start lg:gap-0 gap-20">
          <img
            src={image1}
            alt="SecureTech AV Designs Private Limited"
            className="w-1/3 lg:w-5/6 h-auto mb-4 mt-8 lg:mb-1"
          />

          <div className="flex-1 lg:flex-col lg:px-10">
            <h3 className="text-orange-500 text-5xl font-bold mb-2 lg:text-base">
              Who We Are
            </h3>
            <p className="text-sm lg:text-xs">
              SecureTech AV Designs Private Limited is a leading technology firm
              specializing in the seamless integration of audio, visual,
              lighting architecture, acoustics, ICT, and technology project
              management. Committed to technological excellence, the company
              delivers innovative and precise solutions, creating immersive
              experiences across diverse industries. Their expertise includes
              architectural acoustics, customized AV systems, dynamic lighting,
              robust network infrastructure, and streamlined project management.
              With a holistic approach and a team of distinguished experts,
              SecureTech offers cohesive solutions and end-to-end support.
              Operating in various sectors, they tailor projects to optimize
              functionality and experience, pioneering solutions that harmonize
              technology, design, and innovation.
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col lg:items-center lg:shadow-lg items-start lg:gap-0 gap-20">
          <img
            src={image2}
            alt="What We Do"
            className="w-1/3 md:w-1/3 lg:w-5/6 h-80 mb-4 mt-8"
          />
          <div className="flex-1 lg:flex-col lg:px-10">
            <h3 className="text-orange-500 text-5xl font-bold mb-2 lg:text-base">
              What We Do
            </h3>
            <p className="text-sm lg:text-xs">
              SecureTech AV Designs Private Limited is a specialized System
              Integration company leading in Professional Audio, Video, Control,
              and Lighting services. We excel in integrating cutting-edge
              technology for Government, Semi-government, and Private sectors,
              creating immersive experiences that combine functionality and
              aesthetics. Our comprehensive solutions and expert team address
              the distinct needs of our diverse clientele, setting new standards
              in audiovisual integration and advanced technology. Committed to
              excellence, we navigate complex projects seamlessly, enhancing
              technological landscapes and exceeding expectations across various
              environments. Our client-centric approach makes us the preferred
              partner for challenging and unique technological integrations.
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col lg:items-center lg:shadow-lg items-start lg:gap-0 gap-20">
          <img
            src={image3}
            alt="Solution & Integration"
            className="w-1/3 lg:w-5/6  h-auto mb-4 mt-8"
          />
          <div className="flex-1 lg:flex-col lg:px-10">
            <h3 className="text-orange-500 text-5xl font-bold mb-2 lg:text-base">
              Solution & Integration
            </h3>
            <p className="text-sm lg:text-xs">
              SecureTech AV Designs Private Limited specializes in providing
              complete solutions and integration, offering turnkey services that
              encompass every phase of the project lifecycle. From customized
              design and conceptualization tailored to client needs, to expert
              installation ensuring seamless integration, our services include
              rigorous testing and meticulous programming for optimal
              performance, methodical commissioning for full functionality, and
              ongoing support through annual maintenance contracts. Our
              commitment to delivering end-to-end solutions ensures client
              satisfaction by enabling clients to fully leverage their system
              investments, maximizing benefits and ensuring hassle-free
              operations. At SecureTech AV Designs, we prioritize client
              happiness through our holistic approach to system integration and
              continuous support.
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col lg:items-center lg:shadow-lg items-start lg:gap-0 gap-20">
          <img
            src={image4}
            alt="Methodology & Process"
            className="w-1/3 lg:w-5/6  h-80 mb-4 mt-8"
          />
          <div className="flex-1 lg:flex-col lg:px-10">
            <h3 className="text-orange-500 text-5xl font-bold mb-2 lg:text-base">
              Methodology & Process
            </h3>
            <p className="text-sm lg:text-xs">
              At SecureTech AV Designs Private Limited, our operational ethos
              revolves around a systematic approach guided by stringent
              processes and meticulous guidelines. We execute every project with
              the highest precision and efficiency, thanks to our dedicated team
              of professionals with strong educational backgrounds and extensive
              industry experience. They rigorously adhere to established
              protocols, ensuring each job follows a structured methodology. Our
              approach includes strategic planning tailored to project
              requirements, adherence to procedural guidelines for quality
              assurance, stringent quality control measures at every stage,
              methodical execution for timely completion, and a commitment to
              continuous improvement, allowing us to evolve and deliver superior
              solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col md:flex-row lg:items-center items-start lg:shadow-lg lg:gap-0 gap-20">
          <img
            src={image5}
            alt="Our Vision"
            className="w-1/3 lg:w-5/6  h-auto mb-4 mt-8"
          />
          <div className="flex-1 lg:flex-col lg:px-10 ">
            <h3 className="text-orange-500 text-5xl font-bold mb-2 lg:text-base">
              Our Vision
            </h3>
            <p className="text-sm lg:text-xs ">
              SecureTech AV Designs Private Limited' mission is to engineer
              seamless, immersive experiences by harmonizing technology, design,
              and innovation. The company strives to pioneer cutting-edge
              solutions, exceed expectations, and amplify the way the world
              interacts with audiovisuals, architecture, and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;
