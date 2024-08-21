import React, { useState } from "react";
const Tooltip = ({ children, text }) => {
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
        <div className="absolute z-20 px-3 py-2 text-lg font-medium text-white bg-gray-900 rounded-lg shadow-lg -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {text}
          <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-gray-900 -top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
