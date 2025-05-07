"use client"; 

import React from "react";
import Download from "../../../public/icons/Download";

const Button = () => {
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = "/pdf/Deepu-Resume-25.pdf";
    link.download = "Deepu-Resume-25.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}

      className="rounded-sm bg-btnColor text-[16px] sm:text-[18px] text-white font-bold py-3 px-4 sm:py-4 sm:px-6 nunito-sans cursor-pointer hover:bg-btnHover hover:translate-y-[-5px] duration-300 flex items-center gap-2"
    >
      Download CV
      <Download />
    </button>
  );
};

export default Button;
