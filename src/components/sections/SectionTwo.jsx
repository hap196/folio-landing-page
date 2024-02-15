import React, { useEffect, useState, useRef } from "react";
import "../../index.css";
import portfolioView from "../../assets/portfolioview.png";
import conversationView1 from "../../assets/conversationview1.png";

function SectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="section" id="discover">
      <div className="flex flex-col md:flex-col items-center justify-center pt-40 px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-10 md:mb-0">
          <h1
            className={`text-folioBlue font-semibold text-5xl md:text-left sm:text-center pb-10 transition-all duration-1000 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}
          >
            Say Goodbye to Expensive College Counseling.
          </h1>
          <p className="text-gray-500 pb-10 text-center">
            Expert advice, personalized planning, tailored opportunities – all
            at your fingertips.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            ref={imgRef}
            src={portfolioView}
            alt="Folio Portfolio View"
            className={`px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 inline h-auto object-contain transition-opacity ease-in duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <svg
            className="h-6 w-6 text-gray-700 mx-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
          <img
            ref={imgRef}
            src={conversationView1}
            alt="Folio Conversation View"
            className={`px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 inline h-auto object-contain transition-opacity ease-in duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
