import { useState, useEffect, lazy, Suspense } from "react";
import { authAPI, getToken } from "./hooks/authAPI";
import { HashRouter  as Router, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

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
const Addresses=lazy(()=>import("./Pages/CheckoutPages/Addresses"))
const PickUpPoints=lazy(()=>import("./Pages/CheckoutPages/PickUpPoints"))
const PaymentMethod=lazy(()=>import("./Pages/CheckoutPages/PaymentMethod"))
const ThankYouPage=lazy(()=>import("./Pages/ThankYouPage"))
const BundleDealPage=lazy(()=>import("./Pages/Deals/BundleDealPage"))
const FlashDealPage=lazy(()=>import("./Pages/Deals/FlashDealPage"))
const OneDollarShopePage=lazy(()=>import("./Pages/Deals/OneDollarShopePage"))
const Orders=lazy(()=>import("./Pages/Orders"))
const OrderDetails=lazy(()=>import("./Pages/OrderDetails"))
const Recipt=lazy(()=>import("./Pages/Recipt"))
const ShareOrder=lazy(()=>import("./Pages/ShareOrder"))
const Reviews=lazy(()=>import("./Pages/Reviews"))
const PackageDetail=lazy(()=>import("./Pages/Orders/PackageDetail"))
const FindParcel=lazy(()=>import("./Pages/Orders/FindParcel"))
const MyProfile=lazy(()=>import("./Pages/MyProfile"))
const EditReview=lazy(()=>import("./Pages/EditReview"))
const CouponOffers=lazy(()=>import("./Pages/CouponOffers"))
const ShippingAddress=lazy(()=>import("./Pages/ShippingAddress"))
const BrowsingHistory =lazy(()=>import("./Pages/BrowsingHistory "))
const YourPaymentMethod =lazy(()=>import("./Pages/YourPaymentMethod"))
const AccountSecurity =lazy(()=>import("./Pages/AccountSecurity"))
const Notification =lazy(()=>import("./Pages/Notification"))
const SearchPage =lazy(()=>import("./Pages/SearchPage"))
const CompanyPolicy =lazy(()=>import("./Pages/CompanyPolicy"))
const FollowedAndProvider=lazy(()=>import("./Pages/FollowedAndProvider"))
const SellerStore=lazy(()=>import("./Pages/SellerStore"))
const MobCategories =lazy(()=>import("./Pages/MobCategories"))

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
          <Route path="/Addresses" element={<Addresses/>} />
          <Route path="/PickUpPoints" element={<PickUpPoints/>} />
          <Route path="/PaymentMethod" element={<PaymentMethod/>} />
          <Route path="/ThankYouPage" element={<ThankYouPage/>} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/OrderDetails" element={<OrderDetails/>} />
          <Route path="/Recipt" element={<Recipt/>} />
          <Route path="/ShareOrder" element={<ShareOrder/>} />
          <Route path="/PackageDetail" element={<PackageDetail/>} />
          <Route path="/FindParcel" element={<FindParcel/>} />
          <Route path="/MyProfile" element={<MyProfile/>} />
          <Route path="/Reviews" element={<Reviews/>} />
          <Route path="/EditReview" element={<EditReview/>} />
          <Route path="/CouponOffers" element={<CouponOffers/>} />
          <Route path="/FollowedAndProvider" element={<FollowedAndProvider/>}/>
          <Route path="/ShippingAddress" element={<ShippingAddress/>}/>
          <Route path="/SellerStore" element={<SellerStore/>}/>
          <Route path="/BrowsingHistory" element={<BrowsingHistory/>} />
          <Route path="/ShippingAddress" element={<ShippingAddress/>} />
          <Route path="/YourPaymentMethod" element={<YourPaymentMethod/>} />
          <Route path="/AccountSecurity" element={<AccountSecurity/>} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/SearchPage" element={<SearchPage/>} />
          <Route path="/CompanyPolicy" element={<CompanyPolicy/>} />
          <Route path="/MobCategories" element={<MobCategories/>} />

          <Route path="/FollowedAndProvider" element={<FollowedAndProvider/>}/>
          <Route path="/ShippingAddress" element={<ShippingAddress/>}/>
          <Route path="/SellerStore" element={<SellerStore/>}/>
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
      <ScrollToTop/>
        <Layout />
      </Router>
      </Suspense>
    );
    
  }

export default App;
