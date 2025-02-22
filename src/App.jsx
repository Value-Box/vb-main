import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Headers/Navbar";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/Login/LoginSignup";
import ResetPassword from "./Pages/Login/ResetPassword";
import FindYourAccount from "./Pages/Login/FindYourAccount";
import GetCode from "./Pages/Login/GetCode";
import { authAPI,getToken  } from "./hooks/authAPI";
import { useState,useEffect  } from "react";
import { UseFetch } from "./hooks/UseFetch";
import LoginNavbar from "./Components/Headers/LoginNavbar";


const Layout=()=>{
  const location=useLocation()
  const isLogin=location.pathname.startsWith("/Login")

  const [token, setToken] = useState(null);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const existingToken = getToken(); // Pehle se token hai ya nahi check karein
    if (!existingToken) {
      authAPI().then((newToken) => {
        if (newToken) {
          setToken(newToken);
        }
      });
    } else {
      setToken(existingToken);
    }
  }, []);
  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      const data = await UseFetch(); // ✅ Ensure it returns an array
      console.log(data)
      setBrands(data); // ✅ No need for an extra check, as UseFetch always returns an array
      setLoading(false);
    };
  
    fetchBrands();
  }, []);
  return (
   
      <>
      {isLogin?<LoginNavbar/>:<Navbar />}

{token ? <p>Token Found ✅</p> : <p>Fetching Token...</p>}
<div>
{loading ? (
  <p>Loading brands...</p>
) : (
  <ul>
    {brands.map((brand, index) => (
      <li key={index}>{brand.brandName}</li>
    ))}
  </ul>
)}
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
