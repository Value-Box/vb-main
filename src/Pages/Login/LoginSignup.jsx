import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginImage from "/src/Images/LoginImage.png";
import Input from '../../Components/Input';
import FormButton from '../../Components/FormButton';
import InfoSection from '../../Components/InfoSection';
import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup } from "firebase/auth";


function LoginSignup() {
  const navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [showPassword, setShowPassword] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
   // Promo Code popup
      const [ResetPasswordPopup, setResetPasswordPopup] = useState(false);
      const [showShippingPopup1, setShowShippingPopup1] = useState(false);
    
      useEffect(() => {
        if (ResetPasswordPopup) {
          setTimeout(() => setShowShippingPopup1(true), 10); // Small delay for animation
        } else {
          setShowShippingPopup1(false);
        }
      }, [ResetPasswordPopup]);
 
      useEffect(() => {
        // If already logged in, redirect
        const user = localStorage.getItem("user");
        if (user) {
          navigate("/");
        }
      }, [navigate]);

      const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          localStorage.setItem("user", JSON.stringify(result.user));
          navigate("/");
        } catch (err) {
          console.error("Login failed:", err);
        }
      };

      const [users,setusers]=useState([])

      useEffect(()=>{
        fetch('https://67f655d642d6c71cca61951f.mockapi.io/dummyapis/Users').
        then((res)=>res.json()).
        then((result)=>{
          setusers(result)
        }).catch((err)=>{
          console.log(err)
        })
      },[])

      // useEffect(()=>{
      //   console.log(email)
      // },[email])

      const signUp=async ()=>{
        try {
          const response=await fetch('https://67f655d642d6c71cca61951f.mockapi.io/dummyapis/Users',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({email}),
          });

          if(response.ok){
            const newUserData = await response.json();
            setusers([...users,newUserData ]);
            console.log(newUserData)
            if (newUserData) {
              window.localStorage.setItem('user', JSON.stringify(newUserData)); // Store in localStorage
            }
            setEmail('')
            navigate('/')
          }else{
            alert('Failed to add user')
          }
        } catch (error) {
          console.error('Error during sign-up:', error);
        }
      }

      const submit=()=>{
        // setShowPassword(true);
        const isEmailExist=users.find((user)=>user.email===email)
        console.log(isEmailExist)
        if(!isEmailExist){
          signUp()
        }else {
          window.localStorage.setItem('user', JSON.stringify(isEmailExist));
          navigate('/')
          setEmail('')
        }
        
      }

  return (
    <>
    <div className="bg-[#D1FADF] py-2 text-center items-center justify-center gap-2 block md:hidden">
  <div className="w-4 h-4 flex items-center justify-center bg-[#12B76A] rounded-full border border-[#12B76A]">
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>

  <span className='text-xs font-medium'>Your Information is Protected</span>
</div>
{!isMobile?'':<InfoSection/>}

     <div className="flex w-full">
     <div className="flex items-center justify-center w-[50%] bg-gray-200 hidden md:block">
  <img 
    className="w-full h-[93.8vh] object-cover"
    src={LoginImage}
    alt="Login Page"
  />
</div>
      <div className="w-full flex items-center w-[50%] justify-center">
        <form className="max-w-[400px] 2xl:max-w-[500px] px-5 md:px-0">
        <div className='hidden md:block'>
        <h2 className="text-2xl text-center font-bold mb-1">Register/Sign in</h2>
        <div className="py-2 text-center flex items-center justify-center gap-1">
  <div className="w-4 h-4 flex items-center justify-center bg-[#12B76A] rounded-full border border-[#12B76A]">
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <span className='text-[16px]'>Your Information is Protected</span>
</div>
         
        </div>
         
          {!showPassword ? (
              <div className="mb-4">
                <label className="block text-blue-900">Email</label>
                <Input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
            ) : (
              <div className="mb-4">
                <label className="block text-blue-900">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
            )}

            <FormButton
              onClick={submit}
              className="bg-blue-900 text-white w-full mb-1 cursor-pointer"
            >
              Continue
            </FormButton>
            <p 
              className="mt-3 md:flex hidden text-center cursor-pointer" 
                onClick={(e) => { 
                e.preventDefault(); setIsModalOpen(true); setIsClosing(false)}}
             >
              Trouble Signing in? 
            </p>
          <span 
           className="mt-3 md:hidden flex justify-center text-center cursor-pointer" 
           onClick={() => setResetPasswordPopup(true)}
          >
            Trouble Signing in?
          </span>
          <div className="flex items-center w-full mt-5">
      <div className="flex-1 h-px bg-gray-300"></div>
      <span className="px-3 text-gray-500 text-1xl">Or continue with</span>
       <div className="flex-1 h-px bg-gray-300"></div>
       </div>
       <div className='flex flex-col gap-3 mt-5'>
       <FormButton onClick={handleGoogleLogin} className="bg-white font-semibold text-black border border-gray-300 !rounded-full py-2 px-4 w-full mb-1 cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
    <path d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z" fill="#FFC107"/>
    <path d="M4.72656 11.0183L9.65481 14.6325C10.9883 11.331 14.2178 9 17.9971 9C20.2913 9 22.3786 9.8655 23.9678 11.2793L28.2106 7.0365C25.5316 4.53975 21.9481 3 17.9971 3C12.2356 3 7.23906 6.25275 4.72656 11.0183Z" fill="#FF3D00"/>
    <path d="M17.9983 32.9999C21.8728 32.9999 25.3933 31.5172 28.055 29.1059L23.4125 25.1774C21.8562 26.3617 19.954 27.002 17.9983 26.9999C14.0968 26.9999 10.784 24.5122 9.53603 21.0404L4.64453 24.8092C7.12703 29.6669 12.1685 32.9999 17.9983 32.9999Z" fill="#4CAF50"/>
    <path d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.8857 22.6623 24.82 24.1149 23.412 25.1782L23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z" fill="#1976D2"/>
  </svg>
  <span className="text-center flex-1">Google</span>
</FormButton>
<FormButton className="bg-white font-semibold text-black border border-gray-300 !rounded-full py-2 px-4 w-full mb-1 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
  <g clipPath="url(#clip0_11160_31316)">
    <path d="M36 18C36 8.05894 27.9411 0 18 0C8.05894 0 0 8.05894 0 18C0 26.9842 6.58237 34.431 15.1875 35.7813V23.2031H10.6172V18H15.1875V14.0344C15.1875 9.52312 17.8748 7.03125 21.9864 7.03125C23.9558 7.03125 26.0156 7.38281 26.0156 7.38281V11.8125H23.7459C21.5099 11.8125 20.8125 13.2 20.8125 14.6236V18H25.8047L25.0066 23.2031H20.8125V35.7813C29.4176 34.431 36 26.9844 36 18Z" fill="#1877F2"/>
    <path d="M25.0066 23.2031L25.8047 18H20.8125V14.6236C20.8125 13.1999 21.5099 11.8125 23.7459 11.8125H26.0156V7.38281C26.0156 7.38281 23.9558 7.03125 21.9863 7.03125C17.8748 7.03125 15.1875 9.52313 15.1875 14.0344V18H10.6172V23.2031H15.1875V35.7813C16.1179 35.9271 17.0582 36.0002 18 36C18.9418 36.0002 19.8821 35.9271 20.8125 35.7813V23.2031H25.0066Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_11160_31316">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
  <span className="text-center flex-1">Facebook</span>
</FormButton>
<FormButton className="bg-white font-semibold text-black border border-gray-300 !rounded-full py-2 px-4 w-full mb-1 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M25.5728 30.42C24.1028 31.845 22.4978 31.62 20.9528 30.945C19.3178 30.255 17.8178 30.225 16.0928 30.945C13.9328 31.875 12.7928 31.605 11.5028 30.42C4.1828 22.875 5.26281 11.385 13.5728 10.965C15.5978 11.07 17.0078 12.075 18.1928 12.165C19.9628 11.805 21.6578 10.77 23.5478 10.905C25.8128 11.085 27.5228 11.985 28.6478 13.605C23.9678 16.41 25.0778 22.575 29.3678 24.3C28.5128 26.55 27.4028 28.785 25.5578 30.435L25.5728 30.42ZM18.0428 10.875C17.8178 7.53 20.5328 4.77 23.6528 4.5C24.0878 8.37 20.1428 11.25 18.0428 10.875Z" fill="black"/>
</svg>
  <span className="text-center flex-1">Apple</span>
</FormButton>
       </div>
     
       <p className="text-center mt-10 text-gray-500">
  By continuing, you confirm that you‘re an adult and you’ve read and accepted our   
  <a href="#" className="underline text-gray mx-1">AliExpress</a>
  <a href="#" className="underline text-gray mx-1">Membership Agreement</a> and 
  <a href="#" className="underline text-gray mx-1">Privacy Policy</a>.
</p>
   <p className='text-center mt-2 text-gray-500'>Why choose a location?</p>

        </form>
      </div>
    </div>

{/* Reset Password Modal */}
{isModalOpen && (
  <div className="fixed inset-0 md:flex hidden items-center p-10 justify-center bg-black/70" onClick={() => {
    setIsClosing(true)
    setTimeout(()=>{
    setIsModalOpen(false);
},390)
  }}>
    <div className={`${isClosing?'animate-flyout':'animate-wiggle'} bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-lg shadow-lg relative`}>
       {/* Close Icon */}
       <button 
  className="absolute top-4 right-4 text-white cursor-pointer"
  onClick={() => {
    setIsClosing(true)
    setTimeout(()=>{
    setIsModalOpen(false);
},390)
  }}


>
  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white">
    ✖
  </span> 
</button>


      {/* Modal Content */}
      <h2 className="text-xl font-semibold">Trouble signing in?</h2>
      <p>If you remember your email address or phone number, you can reset your password.</p>
      <NavLink to="/ResetPassword" className="w-full">
      <FormButton className="bg-gray-300 text-black w-full mb-1 border-none cursor-pointer">
        Reset Your Password
      </FormButton>
      </NavLink>
      
      <p>If you forgot your account, you can retrieve it through either your email address or mobile phone number.</p>
      <NavLink to="/FindYourAccount" className="w-full">
      <FormButton className="bg-gray-300 text-black w-full mb-1 border-none cursor-pointer">
      Find your account
      </FormButton>
      </NavLink>
     
     
    </div>
  </div>
)}

{ResetPasswordPopup && (
        <div 
          className={`fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex md:hidden items-end justify-center transition-opacity duration-300 ${
            ResetPasswordPopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setShowShippingPopup1(false); // First hide with animation
            setTimeout(() => setResetPasswordPopup(false), 300); // Then remove from DOM
          }}                             
        >
          <div
            className={`bg-white w-full max-w-md h-auto rounded-t-2xl p-4 shadow-lg transform transition-transform duration-500 ease-out ${
              showShippingPopup1 ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white"
              onClick={() => {
                setShowShippingPopup1(false); // First hide with animation
                setTimeout(() => setResetPasswordPopup(false), 300); // Then remove from DOM
              }}
            >
              ✖
            </button>

            {/* Header */}
            <div className='flex flex-col gap-3'>
            <h2 className="text-xl font-semibold">Trouble signing in?</h2>
      <p>If you remember your email address or phone number, you can reset your password.</p>
      <NavLink to="/ResetPassword" className="w-full">
      <FormButton className="bg-gray-300 text-black w-full border-none cursor-pointer">
        Reset Your Password
      </FormButton>
      </NavLink>
      
      <p>If you forgot your account, you can retrieve it through either your email address or mobile phone number.</p>
      <NavLink to="/FindYourAccount" className="w-full">
      <FormButton className="bg-gray-300 text-black w-full border-none cursor-pointer">
      Find your account
      </FormButton>
      </NavLink>
            </div>
         
     
          </div>
        </div>
      )}
</>
  )
}



export default LoginSignup