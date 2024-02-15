import React from "react";
import "../index.css";
import folioLogo from "../assets/folio_logo.png";

function Footer() {
  return (
    <div className="bg-white p-10 md:p-4 lg:p-4">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:pl-[10rem] lg:pb-12">
        <img src={folioLogo} alt="Folio Logo" className="h-24 mb-4 lg:h-24 lg:mb-0 lg:mr-10 lg:pr-12" />
        <div className="text-center lg:text-left">
          <h5 className="text-folioBlue font-bold text-lg pb-4">Contact</h5>
          <p className="text-folioBlue">development@folio.ai</p>
        </div>
      </div>
      <div className="pb-20 mt-4 lg:mt-0 lg:pl-[10rem]">
        <p className="text-sm text-gray-600 text-center lg:text-left">&copy; {new Date().getFullYear()} Folio. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
