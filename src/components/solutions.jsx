import PropTypes from "prop-types";

const solutions = [
  {
    heading: "1. Architectural Acoustics",
    text: "Designing spaces with optimal acoustics for the best auditory experience. We ensure that every space, whether large or small, has the perfect sound quality. Our expertise extends to soundproofing, echo management, and sound dispersion techniques. We tailor our solutions to meet the specific needs of each project, ensuring clarity and richness in sound. With our architectural acoustics services, every note and word will be heard clearly and beautifully.",
    image: "imaag2.png",
  },
  {
    heading: "2. Audio Visuals",
    text: "Integrating state-of-the-art audio and visual equipment for seamless presentations. Our AV solutions are designed to create immersive experiences, from high-definition video displays to crystal-clear audio systems. We handle everything from installation to calibration, ensuring perfect synchronization and optimal performance. Our team stays updated with the latest technology trends to provide cutting-edge solutions. Whether it’s a conference room or an auditorium, we have the expertise to enhance your presentations.",
    image: "connference.png",
  },
  {
    heading: "3. Light Architectures",
    text: "Creating lighting solutions that enhance the ambiance and functionality of spaces. We specialize in designing lighting systems that highlight architectural features and create the desired mood. Our services include everything from ambient lighting to task-specific illumination. We use energy-efficient lighting solutions to reduce operational costs and environmental impact. Our team works closely with clients to understand their vision and bring it to life with innovative lighting designs.",
    image: "imaag1.png",
  },
  {
    heading: "4. Information Technology",
    text: "Implementing robust IT systems for reliable and efficient operations. Our IT solutions cover network design, server setup, and cybersecurity measures. We ensure that your IT infrastructure is scalable, secure, and optimized for performance. Our team provides ongoing support to address any technical issues promptly. We also offer consultation services to help you plan and implement new technologies. With our IT expertise, your operations will be smooth and uninterrupted.",
    image: "imag12.png",
  },
  {
    heading: "5. Post Project Services",
    text: "Providing ongoing support and maintenance for all installed systems. Our post-project services ensure that your systems continue to operate at peak performance. We offer regular maintenance checks, software updates, and troubleshooting services. Our team is available to provide technical support and address any issues that arise. We also offer training sessions to help your staff get the most out of the installed systems. Our commitment to excellence doesn’t end with project completion; we are here to support you every step of the way.",
    image: "imag10.png",
  },
  {
    heading: "6. Project Management",
    text: "Ensuring projects are completed on time, within budget, and to the highest standards. Our project management services include planning, coordination, and execution of all project phases. We use proven methodologies and tools to keep projects on track and within scope. Our team communicates clearly and effectively with all stakeholders to ensure everyone is aligned. We also manage risks and handle any issues that arise to keep the project moving forward. With our project management expertise, you can be confident that your project will be a success.",
    image: "imag11.png",
  },
];

const SolutionsContainer = ({ className = "" }) => {
  return (
    <div className="container mx-auto p-6 xl:p-0">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className={`flex flex-row sm:flex-col items-center sm:items-start my-8 p-4 gap-6 md:gap-2 lg:gap-10 border rounded-lg shadow-lg ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <img
            src={solution.image}
            alt={solution.heading}
            className="w-full sm:w-2/2 mid:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="w-full sm:w-10/12 px-4 lg:px-6 text-left">
            <h2 className="text-lg font-semibold mb-4 md:text-mini">{solution.heading}</h2>
            <p className="text-sm md:text-xs">{solution.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

SolutionsContainer.propTypes = {
  className: PropTypes.string,
};

export default SolutionsContainer;