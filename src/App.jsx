import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup";
import ResetPassword from "./Pages/ResetPassword";
import FindYourAccount from "./Pages/FindYourAccount";
import GetCode from "./Pages/GetCode";

function App() {
  return (
    <Router basename="/vb-main"> {/* 👈 This ensures all routes are based on /vb-main */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/ResetPassword" element={<ResetPassword/>} />
        <Route path="/FindYourAccount" element={<FindYourAccount/>} />
        <Route path="/GetCode" element={<GetCode/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
