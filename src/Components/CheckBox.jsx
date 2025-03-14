import React from 'react';

function CheckBox({ onClick ,id,checked,onChange}) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
      <div className="inline-flex items-center">
        <label className="flex items-center cursor-pointer relative">
          <input 
            checked={checked}
            type="checkbox" 
            className="peer h-4 w-4 2xl:h-5 2xl:w-5 cursor-pointer transition-all appearance-none rounded-full border border-[#666] checked:bg-[#002882] checked:border-[#002882]" 
            id={id}
            onChange={onChange ? onChange : () => {}}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 2xl:h-3.5 2xl:w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
    </label>
  );
}

export default CheckBox;
