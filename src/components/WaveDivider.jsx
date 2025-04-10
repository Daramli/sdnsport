import React from "react";
import "./WaveDivider.css"; // تأكد من إضافة الملف

const WaveDivider = () => {
  return (
    <div className="wave-divider">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="wave"
      >
        <path
          d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
          fill="#7b0000"
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
