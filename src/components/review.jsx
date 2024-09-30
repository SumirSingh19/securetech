import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const reviews = [
  {
    id: 1,
    name: "Antriksh Verma",
    feedback:
      "Its indeed the place for all your technology needs. i have had a great experience dealing with them for an audio video professional solution. Solution being provided was state of the art and the team was really professional and competant. Thanks SecureTech AV for the awesome experience and wish you all the very best for your future endeavours.",
    rating: 5,
  },
  {
    id: 2,
    name: "Shivam Kapoor",
    feedback:
      "Unmatched in the market, their services are top-notch. The staff's cooperation is outstanding, always prioritizing client requirements. Extremely satisfied with the experience!",
    rating: 5,
  },
  {
    id: 3,
    name: "Nikhil Chaudhary",
    feedback:
      "Very technically sound team and reliable for pricing too kudos👍🏻",
    rating: 5,
  },
  {
    id: 4,
    name: "V M",
    feedback:
      "It is my sincere pleasure to recommend you and your organization to anyone considering your services. Not only are your team members highly skilled, they are equally responsive and refreshingly respectful. I have had my share of war stories with inept contractors and subcontractors. Doing this project with you, and your organization was nothing short of pleasurable. Wishing you and your team, nothing but the best.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anurag Khanna",
    feedback:
      "At the pinnacle of service quality, this team goes above and beyond. The staff's cooperation and attention to client requirements make them the best in the market. I am thoroughly impressed and satisfied!",
    rating: 5,
  },
  {
    id: 6,
    name: "Mansi Banbasi",
    feedback:
      "The key is when a customer walks away, thinking ', Wow, I love doing business with them, and I want to tell others about the experience.' Securetech AV consistently exceed client expectations by delivering innovative solutions on time proficiently and professionally.",
    rating: 5,
  },
  {
    id: 7,
    name: "Crest Ai",
    feedback:
      "No other service comes close to the excellence provided by this team. The staff's cooperation and commitment to client needs are unparalleled. My satisfaction knows no bounds!",
    rating: 5,
  },
  {
    id: 8,
    name: "Vivek Tandon",
    feedback: "Fantastic user experience. Service support is very supportive",
    rating: 4,
  },
  {
    id: 9,
    name: "Pratibha Lalwani",
    feedback:
      "Best in market services. Very cooperative staff. Keeps the client requirements at utmost priority. Highly satisfied!!",
    rating: 5,
  },
  {
    id: 10,
    name: "Sukeshi Dhawan",
    feedback:
      "The staff is very polite and helpful. You can be assured as they handle services skilfully. Highly recommended.",
    rating: 5,
  },
  {
    id: 11,
    name: "Akshita Singh",
    feedback:
      "Finest service provider in market and always keep the customer need at first priority and deliver the service accordingly!! Kudos for the future relationship..",
    rating: 5,
  },
  {
    id: 12,
    name: "Rajani Mehrotra",
    feedback: "Great service, very helpful employees",
    rating: 4,
  },
  {
    id: 13,
    name: "Sonali Singh",
    feedback:
      "It's one of the best AV service provider. Great team and support.",
    rating: 5,
  },
  {
    id: 14,
    name: "Shubham Singh",
    feedback: "Great service and support",
    rating: 5,
  },
  {
    id: 15,
    name: "Dead Gamerz",
    feedback: "Very good service",
    rating: 4,
  },
];

const FrameComponent1 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 1280) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    handleResize(); // Initial call to set visible reviews based on the initial window size

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - visibleReviews + reviews.length) % reviews.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + visibleReviews) % reviews.length
    );
  };

  const getImageUrl = (name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    return `https://via.placeholder.com/100x100.png?text=${firstLetter}`;
  };

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <div className="flex flex-col items-center justify-center px-2 box-border w-full text-center text-black">
        <h1 className="text-2.5xl lg:text-lg leading-normal font-semibold font-poppins text-black">
          Testimonials
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center px-10 box-border w-full text-center text-base">
        <div className="flex-col w-96 lg:w-80 p-2 relative leading-normal flex items-center shrink-0">
          <h1 className="m-0 text-lg lg:text-mid leading-normal font-bold font-poppins text-darkslateblue">
            Hear From Our Happy Clients
          </h1>
          <span className="w-full">
            <p className="m-0 font-poppins lg:text-xs px-2">
              Don't just take our word for it. See how working with AVN has
              helped our clients execute unforgettable events across the nation.
            </p>
          </span>
        </div>
      </div>

      <div
        className={`flex items-center justify-between gap-10 lg:gap-1 p-10 ${className}`}
      >
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-4 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div className="flex flex-row lg:flex-col gap-5 lg:gap-2 items-center">
          {reviews
            .slice(currentIndex, currentIndex + visibleReviews)
            .map((review) => (
              <div
                key={review.id}
                className="shadow-md rounded-lg p-2 bg-slate-200 w-80 h-96 lg:w-44 lg:h-96 relative"
              >
                <div className="absolute lg:top-5 top-1 left-1/2 p-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={getImageUrl(review.name)}
                    alt={`${review.name}'s profile`}
                    className="w-24 h-24 lg:h-14 lg:w-14  rounded-full border-8 border-white shadow-lg"
                  />
                </div>
                <div className="mt-16 lg:mt-10 flex flex-col items-center space-y-2 lg:space-y-0">
                  <h3 className="text-md lg:text-mini font-poppins font-semibold">
                    {review.name}
                  </h3>
                  <p className="text-sm lg:text-xs text-black font-poppins text-center">
                    {review.feedback}
                  </p>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.286 3.965c.3.921-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.965a1 1 0 00-.364-1.118l-3.384-2.46c-.784-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.965z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-4 rounded-full shadow-lg"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
