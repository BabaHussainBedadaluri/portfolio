import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " text-white border-b border-purple-500 "
    : " text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`hover:text-whilte font-semibold mr-3 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
