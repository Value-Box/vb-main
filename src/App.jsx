import { useState, useEffect, lazy, Suspense } from "react";
import { authAPI, getToken } from "./hooks/authAPI";
import { HashRouter  as Router, Route, Routes, useLocation } from "react-router-dom";

const Navbar=lazy(()=>import("./Components/Headers/Navbar"))
const Footer=lazy(()=>import("./Components/Footer"))
const Home=lazy(()=>import("./Pages/Home"))
const LoginSignup=lazy(()=>import("./Pages/Login/LoginSignup"))
const ResetPassword=lazy(()=>import("./Pages/Login/ResetPassword"))
const FindYourAccount=lazy(()=>import("./Pages/Login/FindYourAccount"))
const GetCode=lazy(()=>import("./Pages/Login/GetCode"))
const LoginNavbar=lazy(()=>import("./Components/Headers/LoginNavbar"))
const DealsPage=lazy(()=>import("./Pages/DealsPage"))
const Collection=lazy(()=>import("./Pages/Collection"))
const TrendyFashion=lazy(()=>import("./Pages/TrendyFashion"))
const SingleProduct=lazy(()=>import("./Pages/SingleProduct"))
const AddToCart=lazy(()=>import("./Pages/AddToCart"))
const Checkout=lazy(()=>import("./Pages/CheckoutPages/Checkout"))
const ThankYouPage=lazy(()=>import("./Pages/ThankYouPage"))
const BundleDealPage=lazy(()=>import("./Pages/Deals/BundleDealPage"))
const FlashDealPage=lazy(()=>import("./Pages/Deals/FlashDealPage"))
const OneDollarShopePage=lazy(()=>import("./Pages/Deals/OneDollarShopePage"))





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
          <Route path="/DealsPage" element={<DealsPage />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/ResetPassword" element={<ResetPassword/>} />
          <Route path="/FindYourAccount" element={<FindYourAccount/>} />
          <Route path="/GetCode" element={<GetCode/>} />
          <Route path="/TrendyFashion" element={<TrendyFashion/>} />
          <Route path="/BundleDealPage" element={<BundleDealPage/>} />
          <Route path="/FlashDealPage" element={<FlashDealPage/>} />
          <Route path="/OneDollarShopePage" element={<OneDollarShopePage/>} />
          <Route path="/SingleProduct" element={<SingleProduct/>} />
          <Route path="/AddToCart" element={<AddToCart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/ThankYouPage" element={<ThankYouPage/>} />

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
      <Router>
        <Layout />
      </Router>
      </Suspense>
    );
    
  }

export default App;
