import React, { useEffect } from "react";
import "../index.css";

function Form() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full" id="waitlist">
      <div data-tf-live="01HPN10WVK4Y7ZG5J6JQX3BRQR"></div>
    </div>
  );
}

export default Form;
