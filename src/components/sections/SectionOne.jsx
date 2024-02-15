import React from "react";
import "../../index.css";
import chatView from "../../assets/chatview.png";

function SectionOne() {
  return (
    <div className="section">
      <div className="flex flex-col md:flex-row items-center justify-center pt-40">
        <img
          src={chatView}
          alt="Folio Chat View"
          className="px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-contain mb-10 md:mb-0"
        />
        <div>
    <div className="flex items-baseline">
        <h1 className="text-folioBlue font-semibold text-5xl pb-5 pr-3">Your</h1>
        <h1 className="text-gray-500 font-semibold text-5xl pb-5">AI</h1>
    </div>
    <h3 className="text-folioBlue font-semibold text-5xl text-left">
        College Advisor
    </h3>
</div>

      </div>
    </div>
  );
}

export default SectionOne;
