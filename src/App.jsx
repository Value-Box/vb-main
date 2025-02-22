import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Headers/Navbar";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/Login/LoginSignup";
import ResetPassword from "./Pages/Login/ResetPassword";
import FindYourAccount from "./Pages/Login/FindYourAccount";
import GetCode from "./Pages/Login/GetCode";

import LoginNavbar from "./Components/Headers/LoginNavbar";


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
  return (
    <Router basename="/vb-main">
      <Layout />
    </Router>
  );
  
}

export default App;
