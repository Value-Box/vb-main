import { useState, useEffect, lazy, Suspense } from "react";
import { authAPI, getToken } from "./hooks/authAPI";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

const Navbar=lazy(()=>import("./Components/Headers/Navbar"))
const Footer=lazy(()=>import("./Components/Footer"))
const Home=lazy(()=>import("./Pages/Home"))
const LoginSignup=lazy(()=>import("./Pages/Login/LoginSignup"))
const ResetPassword=lazy(()=>import("./Pages/Login/ResetPassword"))
const FindYourAccount=lazy(()=>import("./Pages/Login/FindYourAccount"))
const GetCode=lazy(()=>import("./Pages/Login/GetCode"))
const LoginNavbar=lazy(()=>import("./Components/Headers/LoginNavbar"))

const Layout=()=>{
  const location=useLocation()
  const loginRoutes = ["/LoginSignup", "/ResetPassword", "/FindYourAccount", "/GetCode"];
  const isLogin = loginRoutes.includes(location.pathname); // ✅ Improved check

  return (
      <>
      {isLogin?<LoginNavbar/>:<Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/ResetPassword" element={<ResetPassword/>} />
          <Route path="/FindYourAccount" element={<FindYourAccount/>} />
          <Route path="/GetCode" element={<GetCode/>} />
        </Routes>
        {isLogin?'':<Footer />}
      </>
  );
}

  function App() {
    useEffect(() => {
      authAPI(); // ✅ Page Load hone par call hoga
    }, []);

    return (
      <Suspense>
      <Router basename="/vb-main">
        <Layout />
      </Router>
      </Suspense>
    );
    
  }

export default App;
