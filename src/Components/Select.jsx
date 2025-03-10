import React from "react";

const Select = ({ options, value, onChange, placeholder }) => {
  return (
    <div className="relative w-full">
    <select
      value={value}
      onChange={onChange}
      className="w-full flex px-4 py-2 pr-10 items-center gap-3 self-stretch rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-0 appearance-none"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {/* Custom Dropdown Icon */}
    <div className="absolute inset-y-2 right-3 flex items-center pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
  <g clip-path="url(#clip0_7129_111153)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2884 10.1569L5.63137 4.49994L7.04537 3.08594L11.9954 8.03594L16.9454 3.08594L18.3594 4.49994L12.7024 10.1569C12.5148 10.3444 12.2605 10.4497 11.9954 10.4497C11.7302 10.4497 11.4759 10.3444 11.2884 10.1569Z" fill="#999999"/>
  </g>
  <defs>
    <clipPath id="clip0_7129_111153">
      <rect width="12" height="24" fill="white" transform="translate(24) rotate(90)"/>
    </clipPath>
  </defs>
</svg>
    </div>
  </div>
  
  );
};

export default Select;
