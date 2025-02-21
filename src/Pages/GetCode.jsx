import React, { useState, useRef, useEffect } from "react";
import FormButton from "../Components/FormButton";

function GetCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120); // 2 minutes timer
  const [canResend, setCanResend] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
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

      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      if (!code[index] && index > 0) {
        inputRefs[index - 1].current.focus();
      }
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
    <div className="flex flex-col items-center  h-screen">
      <div className="bg-white mt-10 px-5 md:px-0">


        <h2 className="text-2xl font-bold mb-4">Verification</h2>
        <p className="text-gray-600  mb-4">Enter the <span className="text-[#002882]"> 4-digit verification code</span> we just sent you.</p>

        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold"
              maxLength="1"
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm text-center mt-4">
          {canResend ? (
            <button onClick={handleResend} className="text-[#002882] font-medium">
              Resend Code
            </button>
          ) : (
            `Resend code in ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`
          )}
        </p>
        <button
          onClick={handleSubmit}
          className="w-full bg-[#002882] text-white font-medium py-2 mt-4 rounded-md hover:bg-[#001a66]"
        >
          Verify Code
        </button>
   <div className="mt-5">
   <p>Didn’t get the code?</p>
        <FormButton className="text-[#002882] border-[#002882] mt-2">
            Resend Code
        </FormButton>

   </div>
       
    
      </div>
    </div>
  );
}

export default GetCode;
