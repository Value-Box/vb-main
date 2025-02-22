import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import FormButton from "../Components/FormButton";

function GetCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120); // 2 minutes timer
  const [canResend, setCanResend] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = () => {
    const enteredCode = code.join("");
    alert(`Code entered: ${enteredCode}`);
    // Add verification logic here
  };

  const handleResend = () => {
    setCode(["", "", "", ""]);
    setTimer(120);
    setCanResend(false);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="bg-white mt-10 px-5 md:px-0 w-full max-w-md">
        
        {/* Back Button */}
        <NavLink to="/ResetPassword">
          <span className="flex items-center gap-1 text-[#002882] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 11H7.83l4.88-4.88a1 1 0 0 0-1.42-1.42l-6.59 6.59a1 1 0 0 0 0 1.42l6.59 6.59a1 1 0 0 0 1.42-1.42L7.83 13H19a1 1 0 0 0 0-2z" fill="#002882"/>
            </svg>
            Back
          </span>
        </NavLink>

        {/* Verification Heading */}
        <h2 className="text-2xl font-bold mb-4">Verification</h2>
        <p className="text-gray-600 mb-4">
          Enter the <span className="text-[#002882]">4-digit verification code</span> we just sent you.
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold 
                        outline-none focus:border-[#002882] transition duration-200"
              maxLength="1"
            />
          ))}
        </div>

        {/* Resend Code Timer */}
        <p className="text-gray-600 text-sm text-center mt-4">
          {canResend ? (
            <FormButton onClick={handleResend} className="text-[#002882] font-medium">
              Resend Code
            </FormButton>
          ) : (
            `Resend code in ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`
          )}
        </p>

        {/* Verify Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#002882] text-white font-medium py-2 mt-4 rounded-md hover:bg-[#001a66] transition"
        >
          Verify Code
        </button>
      </div>
    </div>
  );
}

export default GetCode;
