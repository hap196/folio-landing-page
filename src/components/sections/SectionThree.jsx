import React, { useEffect, useState, useRef } from "react";
import "../../index.css";
import conversationView2 from "../../assets/conversationview2.png";

function SectionThree() {
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
        <img
          ref={imgRef}
          src={conversationView2}
          alt="Folio Conversation View"
          className={`md:order-1 sm:order-2 px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-contain transition-all duration-1000 ${
            isVisible ? "animate-flyInFromBottom" : ""
          }`}
        />
        <div className="md:order-2 sm:order-1">
          <h1
            className={`text-folioBlue font-semibold text-5xl md:text-left sm:text-center pt-10 m:pt-20 max-w-sm leading-tight transition-all duration-1000 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}
          >
            Powerful data-driven advising.
          </h1>
          <h1
            className={`text-black font-semibold text-5xl md:text-left sm:text-center pb-7 max-w-sm leading-tight transition-all duration-1000 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}
          >
            Human-like interactions.
          </h1>
          <p
            className={`text-gray-500 max-w-lg lg:max-w-md text-left pb-4 sm:pb-8 transition-all duration-3000 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}
          >
            Folio understands your background and academic interests, creating a
            personalized advising experience. And unlike a human advisor, Folio
            is available instantly, anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
