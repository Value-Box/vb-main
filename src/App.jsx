import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Headers/Navbar";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/Login/LoginSignup";
import ResetPassword from "./Pages/Login/ResetPassword";
import FindYourAccount from "./Pages/Login/FindYourAccount";
import GetCode from "./Pages/Login/GetCode";

import LoginNavbar from "./Components/Headers/LoginNavbar";
import { useState, useEffect } from "react";

const Layout=()=>{
  const location=useLocation()
  const loginRoutes = ["/LoginSignup", "/ResetPassword", "/FindYourAccount", "/GetCode"];
  const isLogin = loginRoutes.includes(location.pathname); // ✅ Improved check

  const [networkInfo, setNetworkInfo] = useState({
    localIP: "Fetching...",
    macAddress: "Fetching...",
  });

  useEffect(() => {
    const fetchNetworkInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/local-ip"); // ✅ Backend API call
        const data = await response.json();
        setNetworkInfo(data); // ✅ State update karo
      } catch (error) {
        console.error("Error fetching network info:", error);
      }
    };

    fetchNetworkInfo();
  }, []);
  
  return (
   
      <>
      {isLogin?<LoginNavbar/>:<Navbar />}
      <div>
      <h2>Your Local IP Address: {networkInfo.localIP}</h2>
      <h2>Your MAC Address: {networkInfo.macAddress}</h2>
    </div>

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
  return (
    <Router basename="/vb-main">
      <Layout />
    </Router>
  );
  
}

export default App;
