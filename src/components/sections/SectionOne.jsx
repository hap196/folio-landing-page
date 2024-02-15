import React from "react";
import "../../index.css";
import folioChatView from "../../assets/folio_chatview.png";

function SectionOne() {
  return (
    <div className="section">
      <div className="flex flex-col md:flex-row items-center justify-center py-40">
        <img
          src={folioChatView}
          alt="Folio Chat View"
          className="px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-contain mb-10 md:mb-0"
        />
        <div>
          <h1 className="text-folioBlue font-semibold text-5xl">ut morbi tincidunt</h1>
          <h3 className="text-gray-500 font-medium text-2xl">
            nunc vel risus commodo viverra
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
