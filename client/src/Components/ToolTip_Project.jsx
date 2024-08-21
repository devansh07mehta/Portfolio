import React, { useState } from "react";
const ToolTip_Project = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-20 py-2 text-lg font-medium text-white bg-[#f9004d] p-2  flex items-center gap-2 px-4 mx-auto rounded-lg shadow-lg -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#f9004d] -top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )}
    </div>
  );
};

export default ToolTip_Project;
