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
const MobCategories =lazy(()=>import("./Pages/MobCategories"))
const FollowedAndProvider=lazy(()=>import("./Pages/FollowedAndProvider"))
const SellerStore=lazy(()=>import("./Pages/SellerStore"))  
const ContectUs=lazy(()=>import("./Pages/ContectUs"))  
const NotFound=lazy(()=>import("./Pages/NotFound"))  




const Layout=()=>{
  const [showScrollBtn,isShowScrollBtn]=useState(false)
  const location=useLocation()
  const loginRoutes = ["/LoginSignup", "/ResetPassword", "/FindYourAccount", "/GetCode"];
  const isLogin = loginRoutes.includes(location.pathname); // ✅ Improved check

  window.addEventListener('scroll',()=>{
    window.pageYOffset>100?isShowScrollBtn(true):isShowScrollBtn(false)
  })

  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
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
          <Route path="/ContectUs" element={<ContectUs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {isLogin?'':<Footer />}

        <button
  className={`
    fixed bottom-10 right-5 z-50 rounded-full overflow-hidden 
    shadow-xl group transition-all duration-500 ease-out
    ${showScrollBtn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
  `}
  onClick={scrollTop}
>
  <span className="relative flex h-[50px] w-[50px] items-center bg-[#002882] sm:bg-[#E6EAF3] justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#002882] before:duration-500 before:ease-out group-hover:shadow-[#002882] group-hover:before:h-[50px] group-hover:before:w-[50px]">
    <svg
      className="relative z-10 text-white sm:text-[#002882] group-hover:text-white transition-colors duration-300"

      height="26px"
      width="26px"
      viewBox="0 0 330 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394 
        C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75 
        c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213
        C85.251,106.463,94.749,106.463,100.606,100.606z" />
    </svg>
  </span>
</button>

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
