import React from "react";
import "../../index.css";
import folioChatView from "../../assets/folio_chatview.png";

function SectionFour() {
  return (
    <div className="section">
      <div className="flex flex-col md:flex-row items-center justify-center pb-14 px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="sm:order-1 mb-10 md:mb-0">
          <h1 className="text-folioBlue font-semibold text-5xl md:text-left sm:text-center">ut morbi tincidunt</h1>
          <h1 className="text-folioBlue font-semibold text-5xl md:text-left sm:text-center pb-10">
            nunc vel risus
          </h1>
          <p className="text-gray-500 max-w-lg lg:max-w-md text-left pb-4 sm:pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            non enim praesent elementum. Adipiscing diam donec adipiscing
            tristique. Ut tortor pretium viverra suspendisse.
          </p>
        </div>
        <img
          src={folioChatView}
          alt="Folio Chat View"
          className="md:order-1 sm:order-2 px-10 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default SectionFour;
