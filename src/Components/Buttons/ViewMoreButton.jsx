import React from 'react';

function ViewMoreButton({ onClick }) {
  return (
    <div className="text-center">
      <button
        className="border border-[#666] rounded-[5px] py-2.5 px-16 text-[#1A1A1A]"
        onClick={onClick} // ✅ Prop pass ho raha hai
      >
        View More
      </button>
    </div>
  );
}

export default ViewMoreButton;
