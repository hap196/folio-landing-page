import React, { useEffect, useState, useRef } from "react";
import "../../index.css";
import opportunitiesView from "../../assets/opportunitiesView.png";

function SectionFour() {
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
    <div className="section">
      <div className="flex flex-col md:flex-row items-center justify-center pt-40 pb-14 px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="sm:order-1 mb-10 md:mb-0">
          <h1
            className={`text-folioBlue font-semibold text-5xl md:text-left sm:text-center max-w-sm leading-tight transition-all duration-1000 ${
              isVisible ? "animate-flyInFromLeft" : ""
            }`}
          >
            Enhance your Portfolio.
          </h1>
          <h1
            className={`text-black font-semibold text-5xl pb-7 md:text-left sm:text-center max-w-sm leading-tight transition-all duration-1000 ${
              isVisible ? "animate-flyInFromBottomLeft" : ""
            }`}
          >
            Choose from 10,000+ Opportunities.
          </h1>
          <p
            className={`text-gray-500 max-w-lg lg:max-w-md text-left pb-4 sm:pb-8 transition-all duration-1000 ${
              isVisible ? "animate-flyInFromBottomLeft" : ""
            }`}
          >
            Based on your interests, location, and demographics, Folio curates a
            wide collection of opportunities aimed to take your application to
            the next level.
          </p>
        </div>
        <img
          ref={imgRef}
          src={opportunitiesView}
          alt="Folio Opportunities View"
          className={`md:order-1 sm:order-2 px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-contain transition-opacity ease-in duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default SectionFour;
